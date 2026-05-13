import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  Timestamp 
} from 'firebase/firestore';
import { auth, db, signInWithGoogle } from '../lib/firebase';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trash2, 
  LogOut, 
  Mail, 
  User as UserIcon, 
  Calendar, 
  MessageSquare, 
  ShieldCheck,
  X,
  Search,
} from 'lucide-react';
import { GlassCard, Badge } from './ui';

interface Contact {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: Timestamp;
}

export function AdminPortal() {
  const [user, setUser] = useState<User | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const ADMIN_EMAIL = 'imayubalam@gmail.com';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email === ADMIN_EMAIL) {
        // Fetch contacts
        const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
        const unsubFirestore = onSnapshot(q, (snapshot) => {
          const docs = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Contact[];
          setContacts(docs);
          setLoading(false);
        }, (err) => {
            console.error(err);
            setError("Permission denied or error fetching contacts.");
            setLoading(false);
        });
        return () => unsubFirestore();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setError("Login failed.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setContacts([]);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteDoc(doc(db, 'contacts', id));
        if (selectedContact?.id === id) setSelectedContact(null);
      } catch (err) {
        setError("Failed to delete.");
      }
    }
  };

  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
        <GlassCard className="max-w-md w-full p-10 text-center border-indigo-500/20">
          <div className="w-20 h-20 bg-indigo-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="text-indigo-500" size={40} />
          </div>
          <h1 className="text-3xl font-black text-white mb-4">Admin Portal</h1>
          <p className="text-neutral-400 mb-8 font-medium">
            This area is restricted. Please sign in with the administrator account to continue.
          </p>
          <button 
            onClick={handleLogin}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-indigo-600/20"
          >
            Sign in with Google
          </button>
          {error && <p className="mt-4 text-red-500 text-sm font-bold">{error}</p>}
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="indigo">Admin</Badge>
              <span className="text-neutral-500 text-xs font-black uppercase tracking-widest">Control Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">Contact Submissions</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right mr-4">
              <p className="text-sm font-black">{user.displayName}</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">{user.email}</p>
            </div>
            <button 
              onClick={handleLogout}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group"
              title="Logout"
            >
              <LogOut size={20} className="text-neutral-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </header>

        {/* Stats & Search */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <GlassCard className="p-8 border-indigo-500/10">
            <p className="text-neutral-500 text-xs font-black uppercase tracking-widest mb-2">Total Inquiries</p>
            <p className="text-4xl font-black text-white">{contacts.length}</p>
          </GlassCard>
          
          <div className="lg:col-span-3">
            <div className="relative h-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500" size={20} />
              <input 
                type="text" 
                placeholder="Search by name, email, or message content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-full bg-white/5 border border-white/5 rounded-[2rem] pl-16 pr-6 focus:border-indigo-500/50 outline-none transition-all font-medium"
              />
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredContacts.map((contact) => (
              <motion.div
                key={contact.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group"
              >
                <GlassCard 
                  className={`p-8 border-transparent hover:border-indigo-500/30 transition-all cursor-pointer h-full flex flex-col ${selectedContact?.id === contact.id ? 'ring-2 ring-indigo-500 border-indigo-500/50' : ''}`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(contact.id);
                      }}
                      className="p-2 text-neutral-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <h3 className="text-xl font-black mb-1 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{contact.name}</h3>
                  <p className="text-sm font-bold text-neutral-500 mb-6 flex items-center gap-2">
                    <Mail size={12} /> {contact.email}
                  </p>

                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="indigo" className="text-[10px] uppercase tracking-widest">{contact.projectType}</Badge>
                      <span className="text-[10px] text-neutral-600 font-bold flex items-center gap-1">
                        <Calendar size={10} /> {contact.createdAt?.toDate().toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400 line-clamp-3 font-medium leading-relaxed italic opacity-80">
                      "{contact.message}"
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredContacts.length === 0 && !loading && (
          <div className="text-center py-20">
            <p className="text-neutral-500 font-black uppercase tracking-widest">No submissions found</p>
          </div>
        )}
      </div>

      {/* Message Modal */}
      <AnimatePresence>
        {selectedContact && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedContact(null)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-3xl"
            >
              <div className="p-10 border-b border-white/5">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                      <UserIcon size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-white leading-tight uppercase tracking-tight">{selectedContact.name}</h2>
                      <p className="text-indigo-400 font-bold text-sm">{selectedContact.email}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedContact(null)} className="p-2 text-neutral-500 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-white/5 rounded-xl flex items-center gap-3">
                    <Calendar size={14} className="text-neutral-500" />
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                      {selectedContact.createdAt?.toDate().toLocaleString()}
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-indigo-500/10 rounded-xl flex items-center gap-3 border border-indigo-500/20">
                    <Badge variant="indigo" className="text-[10px]">{selectedContact.projectType}</Badge>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-black/20">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare size={18} className="text-indigo-500" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">The Message</span>
                </div>
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5">
                  <p className="text-lg text-neutral-200 leading-relaxed font-medium italic">
                    "{selectedContact.message}"
                  </p>
                </div>
              </div>

              <div className="p-10 flex gap-4">
                <button 
                  onClick={() => handleDelete(selectedContact.id)}
                  className="flex-1 py-4 border border-red-500/20 text-red-500 hover:bg-red-500/5 transition-all rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3"
                >
                  <Trash2 size={18} /> Delete Submission
                </button>
                <a 
                  href={`mailto:${selectedContact.email}?subject=RE: ${selectedContact.projectType} Inquiry`}
                  className="flex-[2] py-4 bg-indigo-600 hover:bg-indigo-700 text-white transition-all rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/20"
                >
                  <Mail size={18} /> Reply via Email
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

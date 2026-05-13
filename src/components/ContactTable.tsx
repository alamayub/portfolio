import { useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { 
  Trash2, 
  Mail, 
  Search, 
  ChevronUp, 
  ChevronDown, 
  Eye,
  ArrowUpDown
} from 'lucide-react';
import { Badge } from './ui';
import { motion, AnimatePresence } from 'motion/react';

export interface Contact {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: Timestamp;
}

interface ContactTableProps {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onSelect: (contact: Contact) => void;
}

type SortField = 'name' | 'email' | 'projectType' | 'createdAt';
type SortOrder = 'asc' | 'desc';

export function ContactTable({ contacts, onDelete, onSelect }: ContactTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const filteredAndSortedContacts = contacts
    .filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.projectType.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let comparison = 0;
      if (sortField === 'createdAt') {
        comparison = a.createdAt.toMillis() - b.createdAt.toMillis();
      } else {
        comparison = String(a[sortField]).localeCompare(String(b[sortField]));
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown size={14} className="opacity-30" />;
    return sortOrder === 'asc' ? <ChevronUp size={14} className="text-indigo-500" /> : <ChevronDown size={14} className="text-indigo-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Table Header / Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
          <input 
            type="text" 
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-3 focus:border-indigo-500/50 outline-none transition-all font-medium text-sm"
          />
        </div>
        <div className="text-sm font-black text-neutral-500 uppercase tracking-widest">
          Showing {filteredAndSortedContacts.length} results
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-8 py-6">
                  <button 
                    onClick={() => handleSort('name')}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                  >
                    Sender <SortIcon field="name" />
                  </button>
                </th>
                <th className="px-8 py-6">
                  <button 
                    onClick={() => handleSort('projectType')}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                  >
                    Project Type <SortIcon field="projectType" />
                  </button>
                </th>
                <th className="px-8 py-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Message Snippet</span>
                </th>
                <th className="px-8 py-6">
                  <button 
                    onClick={() => handleSort('createdAt')}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                  >
                    Date <SortIcon field="createdAt" />
                  </button>
                </th>
                <th className="px-8 py-6 text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <AnimatePresence mode="popLayout">
                {filteredAndSortedContacts.map((contact) => (
                  <motion.tr 
                    key={contact.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group hover:bg-white/[0.02] transition-colors cursor-pointer"
                    onClick={() => onSelect(contact)}
                  >
                    <td className="px-8 py-5">
                      <div>
                        <p className="font-black text-white text-sm uppercase tracking-tight">{contact.name}</p>
                        <p className="text-xs text-neutral-500 font-medium group-hover:text-indigo-400/70 transition-colors">{contact.email}</p>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <Badge variant="indigo" className="text-[10px] py-1 px-3 uppercase tracking-tighter">
                        {contact.projectType}
                      </Badge>
                    </td>
                    <td className="px-8 py-5 max-w-xs">
                      <p className="text-sm text-neutral-400 font-medium truncate opacity-60">
                        {contact.message}
                      </p>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-neutral-300">
                          {contact.createdAt?.toDate().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="text-[10px] text-neutral-600 font-bold">
                          {contact.createdAt?.toDate().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelect(contact);
                          }}
                          className="p-2 text-neutral-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            onDelete(contact.id);
                          }}
                          className="p-2 text-neutral-500 hover:text-red-500 hover:bg-red-500/5 rounded-xl transition-all"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
        
        {filteredAndSortedContacts.length === 0 && (
          <div className="py-20 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="text-neutral-600" size={32} />
            </div>
            <p className="text-neutral-500 font-black uppercase tracking-widest text-xs">No matching submissions found</p>
          </div>
        )}
      </div>
    </div>
  );
}

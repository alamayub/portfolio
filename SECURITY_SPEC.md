# Security Specification - Portfolio Contact Form

## Data Invariants
- A contact message must have a name, email, projectType, message, and createdAt.
- `createdAt` must be the server time.
- `messageId` must follow the standard ID pattern.

## The "Dirty Dozen" Payloads
1. **Unidentified Creation**: Create message with missing `name`. (Should fail schema)
2. **Identity Spoofing**: Attempt to set `createdAt` to a past date. (Should fail server timestamp check)
3. **Ghost Field Injection**: Add `isVerified: true` to the contact message. (Should fail strict key check)
4. **Unauthorized Read**: Anonymous user attempts to list `/contacts`. (Should fail auth check)
5. **Unauthorized Read (Other User)**: Authenticated user (not the owner) attempts to get a specific message. (Should fail owner check)
6. **Malicious Update**: Someone tries to update a message body after submission. (Should fail unless owner)
7. **Malicious Deletion**: Someone tries to delete a message they didn't send. (Should fail unless owner)
8. **ID Poisoning**: Use a very long string as `messageId`. (Should fail `isValidId`)
9. **Resource Exhaustion**: Send a message with a 10MB string. (Should fail size limit check)
10. **Admin Escalation**: Try to set a custom claim or field that would grant admin access. (N/A but blocked by default deny)
11. **Query Scraping**: Anonymous user tries to query all messages where `email` is not null. (Should fail list check)
12. **Incomplete Request**: `create` without `message` field. (Should fail schema)

## Conflict Report
| Collection | Identity Spoofing | State Shortcutting | Resource Poisoning |
| :--- | :--- | :--- | :--- |
| contacts | Blocked by `isOwnerEmail` for read/write | N/A (no status) | Blocked by `isValidId` and `.size()` checks |

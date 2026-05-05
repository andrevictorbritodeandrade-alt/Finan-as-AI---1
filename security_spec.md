# Security Specification - Finanças AI

## 1. Data Invariants
- A `MonthData` document represents the financial state of a family for a specific month.
- Access is restricted by `familyId`.
- Documents must have a `uId` (owner) or be under a specific family path that the user belongs to. In this app, we use a shared `FAMILY_ID` for testing, but in a multi-family app, we'd use `request.auth.uid`. Since the prompt uses a hardcoded `FAMILY_ID`, I will implement rules that allow anyone signed in to access that specific family, or restrict it to a specific admin if needed.
- **Correction**: The app uses `FAMILY_ID` from `constants.ts`. I should ensure that any user accessing `families/{familyId}` is authenticated.

## 2. The "Dirty Dozen" Payloads

1. **Identity Spoofing**: Attempt to write to a family partition without being authenticated.
2. **Path Poisoning**: Attempt to use a 1MB string as `familyId` or `yearMonth`.
3. **Shadow Update**: Attempt to add a field `isAdmin: true` to a `MonthData` document.
4. **Type Poisoning**: Attempt to set `updatedAt` to a string instead of a number.
5. **State Shortcut**: Attempt to update a document with an older `updatedAt` timestamp.
6. **PII Leak**: Attempt to read the entire `families` collection.
7. **Resource Exhaustion**: Attempt to send an array with 100,000 items in `expenses`.
8. **Negative Values**: Attempt to set an expense amount to a negative value (integrity check).
9. **Missing Required Fields**: Attempt to create `MonthData` without `incomes`.
10. **ID Injection**: Attempt to use `../` in a document ID.
11. **Malicious Regex**: Attempt to bypass `isValidId` with non-alphanumeric characters.
12. **Unauthorized Deletion**: Attempt to delete a month's data.

## 3. The Test Runner
(This would be a `.test.ts` file, but for this environment, I'll focus on the rules implementation and ESLint validation).

package com.riveroflifehor.rolserver.forms;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ContactFormEntryService {

    public List<ContactFormEntry> findAllEntries() {
        return contactFormEntryRepo.findAll();
    }
    public ContactFormEntry findEntryById(Long entryId) {
        return contactFormEntryRepo.findById(entryId)
                .orElseThrow(
                        // TODO: Create Custom Exception
                        () -> new RuntimeException(
                                String.format("Form Entry with id % not found.", entryId)
                        ));
    }
    public ContactFormEntry createNewEntry(ContactFormEntry newEntry) {
        return contactFormEntryRepo.save(newEntry);
    }
    public ContactFormEntry updateFormEntry(ContactFormEntry updatedEntry) {
        return contactFormEntryRepo.save(updatedEntry);
    }
    public void deleteByEntryId(Long entryId) {
        contactFormEntryRepo.deleteById(entryId);
    }
    public ContactFormEntryService(ContactFormEntryRepo contactFormEntryRepo) {
        this.contactFormEntryRepo = contactFormEntryRepo;
    }
    private final ContactFormEntryRepo contactFormEntryRepo;
}

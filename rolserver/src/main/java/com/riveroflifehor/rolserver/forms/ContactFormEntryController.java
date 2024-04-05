package com.riveroflifehor.rolserver.forms;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/contact-form")
public class ContactFormEntryController {

    @GetMapping("/all")
    public ResponseEntity<List<ContactFormEntry>> getAllEntries() {
        List<ContactFormEntry> allEntries = contactFormEntryService.findAllEntries();
        return new ResponseEntity<>(allEntries, HttpStatus.OK);
    }
    @GetMapping("/find/{entryId}")
    public ResponseEntity<ContactFormEntry> getByEntryId(@PathVariable("entryId") Long entryId) {
        ContactFormEntry entryById = contactFormEntryService.findEntryById(entryId);
        return new ResponseEntity<>(entryById, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<ContactFormEntry> createNewEntry(@RequestBody ContactFormEntry createEntry) {
        ContactFormEntry newEntry = contactFormEntryService.createNewEntry(createEntry);
        return new ResponseEntity<>(newEntry, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<ContactFormEntry> updateEntry(@RequestBody ContactFormEntry entryUpdate) {
        ContactFormEntry updatedEntry = contactFormEntryService.updateFormEntry(entryUpdate);
        return new ResponseEntity<>(updatedEntry, HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{entryId}")
    public ResponseEntity<?> deleteByEntryId(@PathVariable("entryId") Long entryId) {
        contactFormEntryService.deleteByEntryId(entryId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ContactFormEntryController(ContactFormEntryService contactFormEntryService) {
        this.contactFormEntryService = contactFormEntryService;
    }
    private final ContactFormEntryService contactFormEntryService;
}

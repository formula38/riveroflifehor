package com.riveroflifehor.rolserver.tracks;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/tracks")
@CrossOrigin("*")
public class TrackController {

    @GetMapping("/all")
    public ResponseEntity<List<Track>> getAllTracksController() {
        List<Track> allTracks = trackService.getAllTracksService();
        return ResponseEntity.status(200).body(allTracks);
    }

    @GetMapping("/find/{trackId}")
    public ResponseEntity<Track> getTrackController(@PathVariable("trackId") Long trackId) {
        Track trackById = trackService.getTrackByIdService(trackId);
        return ResponseEntity.status(200).body(trackById);
    }

    @PostMapping("/create")
    public ResponseEntity<Track> createTrackController(@RequestBody Track track) {
        trackService.saveTrackService(track);
        return ResponseEntity.ok(track);
    }

    @PutMapping("/update")
    public ResponseEntity<Track> updateTrackController(@RequestBody Track track) {
        trackService.updateTrackService(track);
        return ResponseEntity.ok(track);
    }

    @DeleteMapping("/delete/{trackId}")
    public ResponseEntity<Void> deleteByTrackIdController(@PathVariable("trackId") Long trackId) {
        trackService.deleteTrackByIdService(trackId);
        return ResponseEntity.noContent().build();
    }


    private final TrackService trackService;

    public TrackController(TrackService trackService) {
        this.trackService = trackService;
    }
}

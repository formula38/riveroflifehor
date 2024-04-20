package com.riveroflifehor.rolserver.tracks;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class TrackService {


    public List<Track> getAllTracksService() {
        return trackRepo.findAll();
    }

    public Track getTrackByIdService(Long trackId) {
        return trackRepo.findById(trackId).get();
    }

    public Track saveTrackService(Track track) { return trackRepo.save(track); }

    public Track updateTrackService(Track track) { return trackRepo.save(track); }

    public void deleteTrackByIdService(Long trackId) { trackRepo.deleteById(trackId); }

    private final TrackRepo trackRepo;

    public TrackService(TrackRepo trackRepo) {
        this.trackRepo = trackRepo;
    }
}

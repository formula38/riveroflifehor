package com.riveroflifehor.rolserver.tracks;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrackRepo extends JpaRepository<Track, Long> {
}

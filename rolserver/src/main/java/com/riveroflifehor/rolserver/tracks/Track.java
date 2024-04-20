package com.riveroflifehor.rolserver.tracks;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tracks")
public class Track implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long trackId;

    private String trackName;
    private String trackImageUrl;
    private String trackUrl;
    private Integer trackLength;
//    private String soundExchange;

}

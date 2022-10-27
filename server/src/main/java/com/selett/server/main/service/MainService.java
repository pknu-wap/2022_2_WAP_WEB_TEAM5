package com.selett.server.main.service;

import com.selett.server.main.dto.MainResponse;
import com.selett.server.repository.CoverLetterRepository;
import com.selett.server.repository.ListRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MainService {
    private final ListRepository listRepository;
    private final CoverLetterRepository coverLetterRepository;

    public MainResponse getListAndCoverLetter(Integer userId) {
        return null;
    }
}

package com.selett.server.main.controller;

import com.selett.server.main.dto.*;
import com.selett.server.main.dto.create.CreateCoverLetterRequest;
import com.selett.server.main.dto.create.CreateCoverLetterResponse;
import com.selett.server.main.dto.create.CreateListRequest;
import com.selett.server.main.dto.create.CreateListResponse;
import com.selett.server.main.dto.delete.DeleteCoverLetterRequest;
import com.selett.server.main.dto.delete.DeleteListRequest;
import com.selett.server.main.service.MainService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("")
public class MainApi {
    private final MainService mainService;
    @GetMapping("")
    public ResponseEntity<MainResponse> getListAndCoverLetter(@Valid MainRequest mainRequest) {
        MainResponse mainResponse = mainService.getListAndCoverLetter(mainRequest.getUserId());

        return ResponseEntity.ok(mainResponse);
    }

    @PostMapping("/lists")
    public ResponseEntity<?> newList(@Valid @RequestBody CreateListRequest createListRequest) {
        if(mainService.existListTitle(createListRequest.getUserId(), createListRequest.getTitle())) {
            return new ResponseEntity<>("중복된 제목이 있습니다.", HttpStatus.BAD_REQUEST);
        }

        CreateListResponse createListResponse = mainService.createList(createListRequest.getUserId(), createListRequest.getTitle());

        return new ResponseEntity<>(createListResponse, HttpStatus.CREATED);
    }

    @PostMapping("/cover-letters")
    public ResponseEntity<?> newCoverLetter(@Valid @RequestBody CreateCoverLetterRequest createCoverLetterRequest) {
        if(mainService.existCoverLetterTitle(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle())) {
            return new ResponseEntity<>("중복된 제목이 있습니다.", HttpStatus.BAD_REQUEST);
        }

        CreateCoverLetterResponse createCoverLetterResponse = mainService.createCoverLetter(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle());

        return new ResponseEntity<>(createCoverLetterResponse, HttpStatus.CREATED);
    }

    @DeleteMapping("/lists")
    public void deleteList(@Valid DeleteListRequest deleteListRequest) {
        mainService.deleteList(deleteListRequest.getListId());
    }

    @DeleteMapping("/cover-letters")
    public void deleteCoverLetter(@Valid DeleteCoverLetterRequest deleteCoverLetterRequest) {
        mainService.deleteCoverLetter(deleteCoverLetterRequest.getId());
    }
}

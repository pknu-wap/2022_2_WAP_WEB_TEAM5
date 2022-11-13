package com.selett.server.main.controller;

import com.selett.server.main.dto.*;
import com.selett.server.main.dto.create.CreateCoverLetterRequest;
import com.selett.server.main.dto.create.CreateCoverLetterResponse;
import com.selett.server.main.dto.create.CreateListRequest;
import com.selett.server.main.dto.create.CreateListResponse;
import com.selett.server.main.dto.delete.DeleteCoverLetterRequest;
import com.selett.server.main.dto.delete.DeleteListRequest;
import com.selett.server.main.dto.update.*;
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
    private final String errorTitle = "중복된 제목이 있습니다.";
    private final String errorRemainOne = "자기소개서가 하나는 있어야합니다.";

    @GetMapping("")
    public ResponseEntity<?> getListAndCoverLetter(@Valid MainRequest mainRequest) {
        MainResponse mainResponse = mainService.getListAndCoverLetter(mainRequest.getUserId());

        return new ResponseEntity<>(mainResponse, HttpStatus.OK);
    }

    @PostMapping("/lists")
    public ResponseEntity<?> newList(@Valid @RequestBody CreateListRequest createListRequest) {
        if (!mainService.existListTitle(createListRequest.getUserId(), createListRequest.getTitle())) {
            return new ResponseEntity<>(errorTitle, HttpStatus.BAD_REQUEST);
        }

        CreateListResponse createListResponse = mainService.createList(createListRequest.getUserId(), createListRequest.getTitle());

        return new ResponseEntity<>(createListResponse, HttpStatus.CREATED);
    }

    @PostMapping("/cover-letters")
    public ResponseEntity<?> newCoverLetter(@Valid @RequestBody CreateCoverLetterRequest createCoverLetterRequest) {
        if (!mainService.existCoverLetterTitle(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle())) {
            return new ResponseEntity<>(errorTitle, HttpStatus.BAD_REQUEST);
        }

        CreateCoverLetterResponse createCoverLetterResponse = mainService.createCoverLetter(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle());

        return new ResponseEntity<>(createCoverLetterResponse, HttpStatus.CREATED);
    }

    @DeleteMapping("/lists")
    public ResponseEntity<?> deleteList(@Valid DeleteListRequest deleteListRequest) {
        mainService.deleteList(deleteListRequest.getListId());

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/cover-letters")
    public ResponseEntity<?> deleteCoverLetter(@Valid DeleteCoverLetterRequest deleteCoverLetterRequest) {
        if(mainService.isOnlyOne(deleteCoverLetterRequest.getId())) {
            return new ResponseEntity<>(errorRemainOne, HttpStatus.BAD_REQUEST);
        }

        mainService.deleteCoverLetter(deleteCoverLetterRequest.getId());

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/lists")
    public ResponseEntity<?> updateList(@Valid @RequestBody UpdateListRequest updateListRequest) {
        mainService.updateList(updateListRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/cover-letters")
    public ResponseEntity<?> updateCoverLetter(@Valid @RequestBody UpdateCoverLetterRequest updateCoverLetterRequest) {
        mainService.updateCoverLetter(updateCoverLetterRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/lists/position")
    public ResponseEntity<?> updatePostionList(@Valid @RequestBody UpdatePositionListRequest updatePositionListRequest) {
        mainService.updatePositionList(updatePositionListRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/cover-letters/position")
    public ResponseEntity<?> updatePositionCoverLetter(@Valid @RequestBody UpdatePositionCoverLetterRequest updatePositionCoverLetterRequest) {
        mainService.updatePositionCoverLetter(updatePositionCoverLetterRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/cover-letters/position/lists")
    public ResponseEntity<?> updatePositionCoverLetterDiffList(@Valid @RequestBody UpdatePositionCoverLetterDiffListRequest updatePositionCoverLetterDiffListRequest) {
        if(mainService.isOnlyOne(updatePositionCoverLetterDiffListRequest.getId())) {
            return new ResponseEntity<>(errorRemainOne, HttpStatus.BAD_REQUEST);
        }
        mainService.updatePositionCoverLetterDiffList(updatePositionCoverLetterDiffListRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}

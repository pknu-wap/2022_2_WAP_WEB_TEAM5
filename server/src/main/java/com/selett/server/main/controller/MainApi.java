package com.selett.server.main.controller;

import com.selett.server.main.dto.MainRequest;
import com.selett.server.main.dto.MainResponse;
import com.selett.server.main.dto.create.CreateCoverLetterRequest;
import com.selett.server.main.dto.create.CreateCoverLetterResponse;
import com.selett.server.main.dto.create.CreateListRequest;
import com.selett.server.main.dto.create.CreateListResponse;
import com.selett.server.main.dto.delete.DeleteCoverLetterRequest;
import com.selett.server.main.dto.delete.DeleteListRequest;
import com.selett.server.main.dto.update.*;
import com.selett.server.main.service.MainService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "불러오기 성공")
    })
    @Operation(summary = "모든 자기소개서 불러오기", description = "해당 유저의 자기소개서 정보를 불러옵니다.")
    public ResponseEntity<MainResponse> getListAndCoverLetter(@Valid MainRequest mainRequest) {
        MainResponse mainResponse = mainService.getListAndCoverLetter(mainRequest.getUserId());

        return new ResponseEntity<>(mainResponse, HttpStatus.OK);
    }

    @PostMapping("/lists")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "리스트 생성 성공"),
            @ApiResponse(responseCode = "400", description = "중복된 제목")
    })
    @Operation(summary = "리스트 생성", description = "리스트를 생성합니다." +
            "<br/>" +
            "<br/>" +
            "Response로 받은 리스트의 prev 리스트에 next를 Response로 받은 리스트의 아이디로 변경해야함")
    public ResponseEntity<CreateListResponse> newList(@Valid @RequestBody CreateListRequest createListRequest) {
        if (mainService.existListTitle(createListRequest.getUserId(), createListRequest.getTitle())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        CreateListResponse createListResponse = mainService.createList(createListRequest.getUserId(), createListRequest.getTitle());

        return new ResponseEntity<>(createListResponse, HttpStatus.CREATED);
    }

    @PostMapping("/cover-letters")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "자기소개서 생성 성공"),
            @ApiResponse(responseCode = "400", description = "중복된 제목")
    })
    @Operation(summary = "자기소개서 생성", description = "자기소개서를 생성합니다." +
            "<br/>" +
            "<br/>" +
            "Response로 받은 자기소개서의 prev 자기소개서에 next를 Response로 받은 자기소개서의 아이디로 변경해야함")
    public ResponseEntity<CreateCoverLetterResponse> newCoverLetter(@Valid @RequestBody CreateCoverLetterRequest createCoverLetterRequest) {
        if (mainService.existCoverLetterTitle(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        CreateCoverLetterResponse createCoverLetterResponse = mainService.createCoverLetter(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle());

        return new ResponseEntity<>(createCoverLetterResponse, HttpStatus.CREATED);
    }

    @DeleteMapping("/lists")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "리스트 삭제 성공")
    })
    @Operation(summary = "리스트 삭제", description = "리스트를 삭제합니다." +
            "<br/>" +
            "<br/>" +
            "삭제를 요청한 리스트와 해당 리스트에 자기소개서를 삭제해야함")
    public ResponseEntity<Void> deleteList(@Valid DeleteListRequest deleteListRequest) {
        mainService.deleteList(deleteListRequest.getListId());

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/cover-letters")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "자기소개서 삭제 성공"),
            @ApiResponse(responseCode = "400", description = "자기소개서가 하나임")
    })
    @Operation(summary = "자기소개서 삭제", description = "자기소개서를 삭제합니다." +
            "<br/>" +
            "<br/>" +
            "삭제를 요청한 자기소개서를 삭제해야함")
    public ResponseEntity<Void> deleteCoverLetter(@Valid DeleteCoverLetterRequest deleteCoverLetterRequest) {
        if(mainService.isOnlyOne(deleteCoverLetterRequest.getId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        mainService.deleteCoverLetter(deleteCoverLetterRequest.getId());

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/lists")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "리스트 갱신 성공")
    })
    @Operation(summary = "리스트 갱신", description = "리스트를 갱신합니다." +
            "<br/>" +
            "<br/>" +
            "갱신 요청한 정보를 갱신해야함")
    public ResponseEntity<Void> updateList(@Valid @RequestBody UpdateListRequest updateListRequest) {
        mainService.updateList(updateListRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/cover-letters")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "자기소개서 갱신 성공")
    })
    @Operation(summary = "자기소개서 갱신", description = "자기소개서를 갱신합니다." +
            "<br/>" +
            "<br/>" +
            "갱신 요청한 정보를 갱신해야함")
    public ResponseEntity<Void> updateCoverLetter(@Valid @RequestBody UpdateCoverLetterRequest updateCoverLetterRequest) {
        mainService.updateCoverLetter(updateCoverLetterRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/lists/position")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "리스트 위치 이동 성공")
    })
    @Operation(summary = "리스트 위치 이동", description = "리스트 위치를 이동합니다." +
            "<br/>" +
            "<br/>" +
            "원래 위치의 prev 리스트의 next를 원래 위치의 next로 저장함" +
            "<br/>" +
            "원래 위치의 next 리스트의 prev를 원래 위치의 prev로 저장함" +
            "<br/>" +
            "이동할 위치의 prev 리스트의 next를 이동할 리스트의 id로 저장함" +
            "<br/>" +
            "이동할 위치의 next 리스트의 prev를 이동할 리스트의 id로 저장함")
    public ResponseEntity<Void> updatePostionList(@Valid @RequestBody UpdatePositionListRequest updatePositionListRequest) {
        mainService.updatePositionList(updatePositionListRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/cover-letters/position")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "자기소개서 위치 이동 성공")
    })
    @Operation(summary = "리스트 위치 이동", description = "자기소개서를 이동합니다." +
            "<br/>" +
            "<br/>" +
            "원래 위치의 prev 자기소개서의 next를 원래 위치의 next로 저장함" +
            "<br/>" +
            "원래 위치의 next 자기소개서의 prev를 원래 위치의 prev로 저장함" +
            "<br/>" +
            "이동할 위치의 prev 자기소개서의 next를 이동할 자기소개서의 id로 저장함" +
            "<br/>" +
            "이동할 위치의 next 자기소개서의 prev를 이동할 자기소개서의 id로 저장함")
    public ResponseEntity<Void> updatePositionCoverLetter(@Valid @RequestBody UpdatePositionCoverLetterRequest updatePositionCoverLetterRequest) {
        mainService.updatePositionCoverLetter(updatePositionCoverLetterRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/cover-letters/position/lists")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "자기소개서 다른 리스트 이동 성공"),
            @ApiResponse(responseCode = "400", description = "자기소개서가 하나임")
    })
    @Operation(summary = "자기소개서 리스트 이동", description = "자기소개서를 다른 리스트로 이동합니다." +
            "<br/>" +
            "원래 리스트의 자기소개서를 삭제함" +
            "<br/>" +
            "이동할 리스트에 Response로 받은 자기소개서를 추가함" +
            "<br/>" +
            "Response로 받은 자기소개서의 prev 자기소개서에 next를 Response로 받은 자기소개서의 아이디로 변경해야함")
    public ResponseEntity<Void> updatePositionCoverLetterDiffList(@Valid @RequestBody UpdatePositionCoverLetterDiffListRequest updatePositionCoverLetterDiffListRequest) {
        if(mainService.isOnlyOne(updatePositionCoverLetterDiffListRequest.getId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        mainService.updatePositionCoverLetterDiffList(updatePositionCoverLetterDiffListRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}

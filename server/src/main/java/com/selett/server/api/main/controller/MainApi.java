package com.selett.server.api.main.controller;

import com.selett.server.api.main.dto.MainRequest;
import com.selett.server.api.main.dto.MainResponse;
import com.selett.server.api.main.dto.create.CreateCoverLetterRequest;
import com.selett.server.api.main.dto.create.CreateListRequest;
import com.selett.server.api.main.dto.delete.DeleteCoverLetterRequest;
import com.selett.server.api.main.dto.delete.DeleteListRequest;
import com.selett.server.api.main.dto.update.*;
import com.selett.server.api.main.service.MainService;
import com.selett.server.utils.RequestTokenValidation;
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
    private final RequestTokenValidation requestTokenValidation;

    @GetMapping("")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "불러오기 성공")
    })
    @Operation(summary = "모든 자기소개서 불러오기", description = "해당 유저의 자기소개서 정보를 불러옵니다." +
            "<br/>" +
            "<br/>" +
            "조회할 유저의 번호를 넣어주세요.")
    public ResponseEntity<MainResponse> getListAndCoverLetter(@Valid MainRequest mainRequest, @RequestHeader("Authorization") String token) {
        requestTokenValidation.verify(token, mainRequest.getUserId());

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
            "생성할 유저의 번호를 넣어주세요.")
    public ResponseEntity<Void> newList(@Valid @RequestBody CreateListRequest createListRequest, @RequestHeader("Authorization") String token) {
        if (mainService.existListTitle(createListRequest.getUserId(), createListRequest.getTitle())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        mainService.createList(createListRequest.getUserId(), createListRequest.getTitle());

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/cover-letters")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "자기소개서 생성 성공"),
            @ApiResponse(responseCode = "400", description = "중복된 제목")
    })
    @Operation(summary = "자기소개서 생성", description = "자기소개서를 생성합니다." +
            "<br/>" +
            "<br/>" +
            "생성항 리스트의 번호를 넣어주세요.")
    public ResponseEntity<Void> newCoverLetter(@Valid @RequestBody CreateCoverLetterRequest createCoverLetterRequest, @RequestHeader("Authorization") String token) {
        if (mainService.existCoverLetterTitle(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        mainService.createCoverLetter(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle());

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/lists")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "리스트 삭제 성공")
    })
    @Operation(summary = "리스트 삭제", description = "리스트를 삭제합니다." +
            "<br/>" +
            "<br/>" +
            "삭제할 리스트의 번호를 넣어주세요.")
    public ResponseEntity<Void> deleteList(@Valid DeleteListRequest deleteListRequest, @RequestHeader("Authorization") String token) {
        if (mainService.isOnlyOneList(deleteListRequest.getListId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
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
            "삭제할 자기소개서의 번호를 넣어주세요.")
    public ResponseEntity<Void> deleteCoverLetter(@Valid DeleteCoverLetterRequest deleteCoverLetterRequest, @RequestHeader("Authorization") String token) {
        if (mainService.isOnlyOneCoverLetter(deleteCoverLetterRequest.getId())) {
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
            "갱신할 리스트의 번호와 갱신할 정보를 입력해주세요.")
    public ResponseEntity<Void> updateList(@Valid @RequestBody UpdateListRequest updateListRequest, @RequestHeader("Authorization") String token) {
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
            "갱신할 자기소개서의 번호와 갱신할 정보를 입력해주세요.")
    public ResponseEntity<Void> updateCoverLetter(@Valid @RequestBody UpdateCoverLetterRequest updateCoverLetterRequest, @RequestHeader("Authorization") String token) {
        mainService.updateCoverLetter(updateCoverLetterRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/lists/position")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "리스트 위치 이동 성공"),
            @ApiResponse(responseCode = "400", description = "요청한 id가 하나라도 존재하지 않거나(null 제외) 이동할 곳이 원래 붙어있지 않음")
    })
    @Operation(summary = "리스트 위치 이동", description = "리스트 위치를 이동합니다." +
            "<br/>" +
            "<br/>" +
            "이동할 리스트 번호와 이동할 위치의 이전 리스트 번호와 다음 리스트 번호를 입력해주세요." +
            "<br/>" +
            "(끝은 null 입니다.)")
    public ResponseEntity<Void> updatePostionList(@Valid @RequestBody UpdatePositionListRequest updatePositionListRequest, @RequestHeader("Authorization") String token) {
        if (!mainService.checkSafeList(updatePositionListRequest)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        mainService.updatePositionList(updatePositionListRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/cover-letters/position")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "자기소개서 위치 이동 성공"),
            @ApiResponse(responseCode = "400", description = "요청한 id가 하나라도 존재하지 않거나(null 제외) 이동할 곳이 원래 붙어있지 않음")
    })
    @Operation(summary = "자기소개서 위치 이동", description = "자기소개서를 이동합니다." +
            "<br/>" +
            "<br/>" +
            "이동할 자기소개서 번호와 이동할 위치의 이전 자기소개서 번호와 다음 자기소개서 번호를 입력해주세요." +
            "<br/>" +
            "(끝은 null 입니다.)")
    public ResponseEntity<Void> updatePositionCoverLetter(@Valid @RequestBody UpdatePositionCoverLetterRequest updatePositionCoverLetterRequest, @RequestHeader("Authorization") String token) {
        if (!mainService.checkSafeCoverLetter(updatePositionCoverLetterRequest)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

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
            "<br/>" +
            "이동할 자기소개서 번호와 이동할 리스트의 번호를 입력해주세요.")
    public ResponseEntity<Void> updatePositionCoverLetterDiffList(@Valid @RequestBody UpdatePositionCoverLetterDiffListRequest updatePositionCoverLetterDiffListRequest, @RequestHeader("Authorization") String token) {
        if (mainService.isOnlyOneCoverLetter(updatePositionCoverLetterDiffListRequest.getId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        mainService.updatePositionCoverLetterDiffList(updatePositionCoverLetterDiffListRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}

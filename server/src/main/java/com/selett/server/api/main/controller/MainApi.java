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
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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
    @Operation(summary = "모든 자기소개서 불러오기", description = "해당 유저의 자기소개서 정보를 불러옵니다." +
            "<br/>" +
            "<br/>" +
            "조회할 유저의 번호를 넣어주세요.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "OK",
                            content = @Content(schema = @Schema(implementation = MainResponse.class)))
            }
    )
    @io.swagger.annotations.ApiResponses(
            @io.swagger.annotations.ApiResponse(
                    response = MainResponse.class, message = "OK", code = 200)
    )
    public ResponseEntity<?> getListAndCoverLetter(@Valid MainRequest mainRequest,
                                                   @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verify(token, mainRequest.getUserId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        MainResponse mainResponse = mainService.getListAndCoverLetter(mainRequest.getUserId());

        return new ResponseEntity<>(mainResponse, HttpStatus.OK);
    }

    @PostMapping("/lists")
    @Operation(summary = "리스트 생성", description = "리스트를 생성합니다." +
            "<br/>" +
            "<br/>" +
            "생성할 유저의 번호를 넣어주세요."
    )
    public ResponseEntity<?> createList(@Valid @RequestBody CreateListRequest createListRequest,
                                        @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verify(token, createListRequest.getUserId());

            mainService.existListTitle(createListRequest.getUserId(), createListRequest.getTitle());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        mainService.createList(createListRequest.getUserId(), createListRequest.getTitle());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/cover-letters")
    @Operation(summary = "자기소개서 생성", description = "자기소개서를 생성합니다." +
            "<br/>" +
            "<br/>" +
            "생성항 리스트의 번호를 넣어주세요."
    )
    public ResponseEntity<?> createCoverLetter(@Valid @RequestBody CreateCoverLetterRequest createCoverLetterRequest,
                                               @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyList(token, createCoverLetterRequest.getListId());

            mainService.existCoverLetterTitle(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        mainService.createCoverLetter(createCoverLetterRequest.getListId(), createCoverLetterRequest.getTitle());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/lists")
    @Operation(summary = "리스트 삭제", description = "리스트를 삭제합니다." +
            "<br/>" +
            "<br/>" +
            "삭제할 리스트의 번호를 넣어주세요."
    )
    public ResponseEntity<?> deleteList(@Valid DeleteListRequest deleteListRequest,
                                           @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyList(token, deleteListRequest.getListId());

            mainService.isOnlyOneList(deleteListRequest.getListId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        mainService.deleteList(deleteListRequest.getListId());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/cover-letters")
    @Operation(summary = "자기소개서 삭제", description = "자기소개서를 삭제합니다." +
            "<br/>" +
            "<br/>" +
            "삭제할 자기소개서의 번호를 넣어주세요."
    )
    public ResponseEntity<?> deleteCoverLetter(@Valid DeleteCoverLetterRequest deleteCoverLetterRequest,
                                                  @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyCoverLetter(token, deleteCoverLetterRequest.getId());

            mainService.isOnlyOneCoverLetter(deleteCoverLetterRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        mainService.deleteCoverLetter(deleteCoverLetterRequest.getId());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/lists")
    @Operation(summary = "리스트 갱신", description = "리스트를 갱신합니다." +
            "<br/>" +
            "<br/>" +
            "갱신할 리스트의 번호와 갱신할 정보를 입력해주세요."
    )
    public ResponseEntity<?> updateList(@Valid @RequestBody UpdateListRequest updateListRequest,
                                           @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyList(token, updateListRequest.getListId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        mainService.updateList(updateListRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/cover-letters")
    @Operation(summary = "자기소개서 갱신", description = "자기소개서를 갱신합니다." +
            "<br/>" +
            "<br/>" +
            "갱신할 자기소개서의 번호와 갱신할 정보를 입력해주세요."
    )
    public ResponseEntity<?> updateCoverLetter(@Valid @RequestBody UpdateCoverLetterRequest updateCoverLetterRequest,
                                                  @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyCoverLetter(token, updateCoverLetterRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        mainService.updateCoverLetter(updateCoverLetterRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/lists/position")
    @Operation(summary = "리스트 위치 이동", description = "리스트 위치를 이동합니다." +
            "<br/>" +
            "<br/>" +
            "이동할 리스트 번호와 이동할 위치의 이전 리스트 번호와 다음 리스트 번호를 입력해주세요." +
            "<br/>" +
            "(끝은 null 입니다.)"
    )
    public ResponseEntity<?> updatePostionList(@Valid @RequestBody UpdatePositionListRequest updatePositionListRequest,
                                                  @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyList(token, updatePositionListRequest.getListId());
            if(updatePositionListRequest.getToMovePrevListId() != null) {
                requestTokenValidation.verifyList(token, updatePositionListRequest.getToMovePrevListId());
            }
            if(updatePositionListRequest.getToMoveNextListId() != null) {
                requestTokenValidation.verifyList(token, updatePositionListRequest.getToMoveNextListId());
            }

            mainService.isOnlyOneList(updatePositionListRequest.getListId());

            mainService.checkSafeList(updatePositionListRequest);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        mainService.updatePositionList(updatePositionListRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/cover-letters/position")
    @Operation(summary = "자기소개서 위치 이동", description = "자기소개서를 이동합니다." +
            "<br/>" +
            "<br/>" +
            "이동할 자기소개서 번호와 이동할 위치의 이전 자기소개서 번호와 다음 자기소개서 번호를 입력해주세요." +
            "<br/>" +
            "(끝은 null 입니다.)"
    )
    public ResponseEntity<?> updatePositionCoverLetter(@Valid @RequestBody UpdatePositionCoverLetterRequest updatePositionCoverLetterRequest,
                                                          @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyCoverLetter(token, updatePositionCoverLetterRequest.getId());
            if(updatePositionCoverLetterRequest.getToMovePrevId() != null) {
                requestTokenValidation.verifyCoverLetter(token, updatePositionCoverLetterRequest.getToMovePrevId());
            }
            if(updatePositionCoverLetterRequest.getToMoveNextId() != null) {
                requestTokenValidation.verifyCoverLetter(token, updatePositionCoverLetterRequest.getToMoveNextId());
            }

            mainService.isOnlyOneCoverLetter(updatePositionCoverLetterRequest.getId());

            mainService.checkSafeCoverLetter(updatePositionCoverLetterRequest);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        mainService.updatePositionCoverLetter(updatePositionCoverLetterRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/cover-letters/position/lists")
    @Operation(summary = "자기소개서 리스트 이동", description = "자기소개서를 다른 리스트로 이동합니다." +
            "<br/>" +
            "<br/>" +
            "이동할 자기소개서 번호와 이동할 리스트의 번호를 입력해주세요."
    )
    public ResponseEntity<?> updatePositionCoverLetterDiffList(@Valid @RequestBody UpdatePositionCoverLetterDiffListRequest updatePositionCoverLetterDiffListRequest,
                                                                  @RequestHeader("Authorization") String token) {
        try {
            requestTokenValidation.verifyCoverLetter(token, updatePositionCoverLetterDiffListRequest.getId());
            requestTokenValidation.verifyList(token, updatePositionCoverLetterDiffListRequest.getToMoveListId());

            mainService.isOnlyOneCoverLetter(updatePositionCoverLetterDiffListRequest.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        mainService.updatePositionCoverLetterDiffList(updatePositionCoverLetterDiffListRequest);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}

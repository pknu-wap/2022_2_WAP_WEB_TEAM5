package com.selett.server.main.dto.create;

import com.selett.server.main.dto.FolderList;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateListResponse {
    private FolderList list;
}

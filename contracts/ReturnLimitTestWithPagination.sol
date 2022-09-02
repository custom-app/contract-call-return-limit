// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ReturnLimitTestWithPagination {
    uint256[] private array;

    function addToArray(uint256 count) external {
        for (uint256 i = 0; i < count; i++) {
            array.push(array.length);
        }
    }

    function getArray(uint256 page, uint256 pageSize) external view returns (uint256[] memory, uint256) {
        require(pageSize > 0, "page size must be positive");
        require(page == 0 || page*pageSize <= array.length, "out of bounds");
        uint256 actualSize = pageSize;
        if ((page+1)*pageSize > array.length) {
            actualSize = array.length - page*pageSize;
        }
        uint256[] memory res = new uint256[](actualSize);
        for (uint256 i = 0; i < actualSize; i++) {
            res[i] = array[page*pageSize+i];
        }
        return (res, array.length);
    }
}

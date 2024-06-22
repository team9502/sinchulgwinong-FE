"use client";

import Blank from "@/components/Blank";
import List from "../../components/List";
import usePagination from "@/hooks/usePagination";

const THEAD = ["번호", "제목", "작성일", "조회"];

const QuestionListBox = () => {
  const { currentPage, onPageChange } = usePagination();
  return (
    <List>
      <List.Header count={200} />
      <List.Table className="w-full">
        <List.Table.Head titles={THEAD} />
        <Blank />
      </List.Table>
      <List.Footer onPageChange={onPageChange} currentPage={1} totalPages={1} />
    </List>
  );
};

export default QuestionListBox;

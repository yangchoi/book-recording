export interface BookRepository {
  // 책 생성
  createBook(data): Promise<boolean>;
  
  // 책 이름으로 찾기 

  // 책 삭제

  // 책 수정

  // 책 리스트
}
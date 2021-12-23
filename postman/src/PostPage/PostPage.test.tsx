import APIService from "Services/APIServices";

describe('Post page component', () => {

  it('should return a single post with specified id', async () => {
    
      const post = await APIService.getOnePost(1);
      const { title } = post;

      expect(title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  })
});

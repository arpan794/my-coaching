class ApiFeatures {
    constructor (query, queryStr) {
        this.query = query;
        this.queryStr = queryStr
    }

    search(){
      const keyword = this.queryStr.keyword 
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

     // console.log(keyword);
      
      this.query = this.query.find({ ...keyword });
      return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

export default ApiFeatures
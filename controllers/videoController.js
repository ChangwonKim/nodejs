//export const home = (req, res) => res.sendFile("../");
export const home = (req, res) => res.render("home", {pageTitle:"Home"});

export const search = (req, res) => {
    //const searchingBy = req.query.term; Before ES6
    const {query : {term : searchingBy}} = req;
    res.render("search", {pageTitle:"Search", searchingBy});
}

export const vidoes = (req, res) => 
    res.render("videos", {pageTitle:"Vidoes"});

export const upload = (req, res) => 
    res.render("upload", {pageTitle:"Upload"});

export const videoDetail = (req, res) => 
    res.render("videoDetail", {pageTitle:"Video Detail"});

export const editVideo = (req, res) => 
    res.render("editVideo", {pageTitle:"Edit Video"});
    
export const deleteVideo = (req, res) => 
    res.render("deleteVideo", {pageTitle:"Delete Video"}); 
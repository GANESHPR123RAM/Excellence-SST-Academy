const {TopersModel, TopersReviewModel, DemoLinkModel} = require('../model/uploads-model');

const Topers = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, Marks, Year, Class } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photos = await TopersModel({ path: filePath, filename, name, Marks, Year, Class });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const GetTopers = async (req, res) => {
  try {
    const fetchTopers = await TopersModel.find();

    if (!fetchTopers || fetchTopers.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    res.status(200).json({ fetchTopers });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const deleteTopers = async (req, res) => {
  try {
    const id = req.params.id;
    await TopersModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const TopersReview = async (req, res) => {
  try {
    const { Name, Marks, Year, Class, message } = req.body; 

    if (!Name) {
      return res.status(400).json({ error: 'Name is required.' });
    }

    
    const Review = await TopersReviewModel({ Name, Marks, Year, Class, message }); 
    await Review.save();

    res.status(201).json({ message: 'Review submitted successfully.' });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Server error' });
  }
};


const GetTopersReview = async (req, res) => {
  try {
    const fetchTopersReview = await TopersReviewModel.find();

    if (!fetchTopersReview || fetchTopersReview.length === 0) {
      return res.status(404).json({ message: 'No reviews found.' });
    }

    res.status(200).json({ fetchTopersReview });
  } catch (error) {
    console.error(`Error fetching reviews: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const deleteTopersReview = async (req, res, next) => { 
  try {
    const id = req.params.id;
    await TopersReviewModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Review Deleted Successfully" });
  } catch (error) {
    next(error); 
  }
}


const DemoLink = async (req, res) => {
  try {
    const { title, link } = req.body; 

    if (!title || !link) {
      return res.status(400).json({ error: 'Title and link are required.' });
    }

    
    const demoLink = await DemoLinkModel({ title, link }); 
    await demoLink.save();

    res.status(201).json({ message: 'Demo link submitted successfully.' });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Server error' });
  }
};


const GetDemoLink = async (req, res) => {
  try {
    const fetchDemoLink = await DemoLinkModel.find();


    if (!fetchDemoLink || fetchDemoLink.length === 0) {
      return res.status(404).json({ message: 'No demo links found.' });
    }

    res.status(200).json({ fetchDemoLink });
  } catch (error) {
    console.error(`Error fetching demo links: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const deleteDemoLink = async (req, res, next) => { 
  try {
    const id = req.params.id;
    await DemoLinkModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Demo Link Deleted Successfully" });
  } catch (error) {
    next(error); 
  }
}


module.exports = {
  Topers,
  GetTopers,
  deleteTopers,
  TopersReview,
  GetTopersReview,
  deleteTopersReview,
  DemoLink,
  GetDemoLink,
  deleteDemoLink,
};
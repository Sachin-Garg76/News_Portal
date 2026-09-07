import express from 'express';
import { userModel, newsModel, contactUsModel } from '../models/table.js';

const router = express.Router();


// ========================= USER REGISTER =========================
router.post('/user-register', async (req, res) => {
   try {
      const { name, email, password, contact, address } = req.body;

      // Check profile image
      if (!req.files || !req.files.profile) {
         return res.json({
            code: 400,
            message: "Profile image is required!",
            data: ''
         });
      }

      const { profile } = req.files;

      // Check existing user
      const isExist = await userModel.findOne({ email });

      if (isExist) {
         return res.json({
            code: 400,
            message: "User already exist!",
            data: isExist
         });
      }

      // Upload profile image
      await profile.mv("uploads/" + profile.name);

      // Create user
      const data = new userModel({
         name,
         email,
         password,
         contact,
         address,
         profile: profile.name
      });

      const result = await data.save();

      return res.json({
         code: 200,
         message: "User registered successfully!",
         data: result
      });

   } catch (error) {
      console.error("Registration error:", error);

      return res.json({
         code: 500,
         message: "Something went wrong",
         data: ""
      });
   }
});


// ========================= USER UPDATE =========================
router.put('/user-update', async (req, res) => {
   try {
      const { name, email, password, contact, address, _id } = req.body;

      let profileName;

      // Profile image is optional during update
      if (req.files && req.files.profile) {
         const { profile } = req.files;

         await profile.mv("uploads/" + profile.name);

         profileName = profile.name;
      }

      // Update data
      const updateData = {
         name,
         email,
         password,
         contact,
         address
      };

      // Update profile only when new image is uploaded
      if (profileName) {
         updateData.profile = profileName;
      }

      const result = await userModel.findByIdAndUpdate(
         _id,
         updateData,
         { new: true }
      );

      if (result) {
         return res.json({
            code: 200,
            message: "Profile Updated successfully..",
            data: result
         });
      }

      return res.json({
         code: 400,
         message: "Profile Update Failed.",
         data: ''
      });

   } catch (error) {
      console.error("Profile update error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= LOGIN =========================
router.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body;

      const result = await userModel.findOne({
         email,
         password
      });

      if (result) {
         return res.json({
            code: 200,
            message: "Login Successfully....",
            data: result
         });
      }

      return res.json({
         code: 400,
         message: "invalid credentials",
         data: ""
      });

   } catch (error) {
      console.error("Login error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= ADD NEWS =========================
router.post('/add-news', async (req, res) => {
   try {
      const {
         title,
         category,
         city,
         type,
         url,
         desc,
         userId
      } = req.body;

      const isExist = await newsModel.findOne({ title });

      if (isExist) {
         return res.json({
            code: 400,
            message: "Title Already Exist.",
            data: isExist
         });
      }

      const data = new newsModel({
         title,
         category,
         type,
         city,
         url,
         desc,
         userId
      });

      const result = await data.save();

      return res.json({
         code: 200,
         message: "News Added Successfully.",
         data: result
      });

   } catch (error) {
      console.error("Add news error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= USER YOUR NEWS =========================
router.get('/user-your-news', async (req, res) => {
   try {
      const { userId } = req.query;

      const result = await newsModel
         .find({ userId })
         .sort({ createAt: -1 });

      return res.json({
         code: 200,
         message: "Data fetched succeessfully..",
         data: result
      });

   } catch (error) {
      console.error("User news error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= ALL APPROVED NEWS =========================
router.get('/all-approved-news', async (req, res) => {
   try {
      const result = await newsModel
         .find({ isApproved: true })
         .sort({ createAt: -1 });

      return res.json({
         code: 200,
         message: "Data fetched succeessfully..",
         data: result
      });

   } catch (error) {
      console.error("Approved news error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= ADMIN ALL NEWS =========================
router.get('/admin-all-list', async (req, res) => {
   try {
      const result = await newsModel
         .find()
         .sort({ createAt: -1 });

      return res.json({
         code: 200,
         message: "Data fetched succeessfully..",
         data: result
      });

   } catch (error) {
      console.error("Admin news error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= ADMIN APPROVE NEWS =========================
router.put('/admin-news-approved', async (req, res) => {
   try {
      const { _id, isApproved } = req.body;

      const result = await newsModel.findByIdAndUpdate(
         _id,
         { isApproved },
         { new: true }
      );

      if (result) {
         return res.json({
            code: 200,
            message: "Updated succeessfully..",
            data: result
         });
      }

      return res.json({
         code: 400,
         message: "Updated Failed.",
         data: result
      });

   } catch (error) {
      console.error("Approve news error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= TOP TEN NEWS =========================
router.get('/top-ten-news', async (req, res) => {
   try {
      const result = await newsModel
         .find({
            type: "image",
            isApproved: true
         })
         .sort({ createAt: -1 })
         .limit(10);

      return res.json({
         code: 200,
         message: "Data fetched successfully",
         data: result
      });

   } catch (error) {
      console.error("Top news error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= TOP CATEGORY =========================
router.get('/top-category', async (req, res) => {
   try {
      const result = await newsModel
         .find({
            type: "image",
            isApproved: true
         })
         .sort({ createAt: -1 });

      const seen = new Set();

      const uniqueArray = result
         ?.filter((item) => {
            if (!seen.has(item?.category)) {
               seen.add(item?.category);
               return true;
            }

            return false;
         })
         .slice(0, 6);

      return res.json({
         code: 200,
         message: "Data fetched successfully",
         data: uniqueArray
      });

   } catch (error) {
      console.error("Category error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= TOP CITY =========================
router.get('/top-city', async (req, res) => {
   try {
      const result = await newsModel
         .find({
            type: "image",
            isApproved: true
         })
         .sort({ createAt: -1 })
         .limit(6);

      const seen = new Set();

      const uniqueArray = result?.filter((item) => {
         if (!seen.has(item?.city)) {
            seen.add(item?.city);
            return true;
         }

         return false;
      });

      return res.json({
         code: 200,
         message: "Data fetched successfully",
         data: uniqueArray
      });

   } catch (error) {
      console.error("City error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= TOP VIDEOS =========================
router.get('/top-video', async (req, res) => {
   try {
      const result = await newsModel
         .find({
            type: "video",
            isApproved: true
         })
         .sort({ createAt: -1 });

      return res.json({
         code: 200,
         message: "Data fetched successfully",
         data: result
      });

   } catch (error) {
      console.error("Video error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= DELETE NEWS =========================
router.post('/delete-news', async (req, res) => {
   try {
      const { _id } = req.body;

      const result = await newsModel.findByIdAndDelete(_id);

      if (result) {
         return res.json({
            code: 200,
            message: "News Deleted Successfully",
            data: result
         });
      }

      return res.json({
         code: 400,
         message: "News Deleted failed",
         data: result
      });

   } catch (error) {
      console.error("Delete news error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= ADD CONTACT US =========================
router.post('/add-contact-us', async (req, res) => {
   try {
      const { name, email, phone, message } = req.body;

      const data = new contactUsModel({
         name,
         email,
         phone,
         message
      });

      const result = await data.save();

      if (result) {
         return res.json({
            code: 200,
            message: "Save successfully.",
            data: result
         });
      }

      return res.json({
         code: 400,
         message: "Save failed!.",
         data: ''
      });

   } catch (error) {
      console.error("Contact save error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


// ========================= GET CONTACT US =========================
router.get('/get-contact-us', async (req, res) => {
   try {
      const result = await contactUsModel.find();

      if (result) {
         return res.json({
            code: 200,
            message: "Data fetched successfully.",
            data: result
         });
      }

      return res.json({
         code: 400,
         message: "Failed!.",
         data: ''
      });

   } catch (error) {
      console.error("Get contact error:", error);

      return res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      });
   }
});


export default router;
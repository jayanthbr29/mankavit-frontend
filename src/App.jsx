// import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import GlobalStyle from './theme/GlobalStyle'
import theme from './theme/Theme'
import './App.css'
import BaseLayout from './component/BaseLayout/BaseLayout'
import Dashboard from './module/admin/pages/Dashboard/Dashboard'
import Homepage from './module/admin/pages/Homepage/Homepage'
import Login from './pages/Login/Login'
import OtpLogin from './pages/OtpLogin/OtpLogin'
import Test from './pages/Test/Test'
import SignUp from './pages/SignUp/SignUp'
import OtpSignup from './pages/OtpSignup/OtpSignup'
import Course from './module/admin/pages/Course/Course'
import StudentsTable from './module/admin/pages/StudentManagement/StudentManagement'
import StudentManagement from './module/admin/pages/StudentManagement/StudentManagement'
import Payment from './module/admin/pages/Payment/Payment'
import Subjects from './module/admin/pages/Subjects/Subject'
import AddSubject from './module/admin/component/Subject/AddSubject/AddSubject'
import NotesManagement from './module/admin/pages/Notes/Notes'
import CoursesTable from './module/admin/pages/Course/Course'
import AddCourse from './module/admin/component/Course/AddCourse/AddCourse'
import AddNote from './module/admin/component/Notes/AddNotes/AddNotes'
import LandingPage from './pages/LandingPage/LangingPage'
import AboutUs from './pages/AboutUs/AboutUs'
import OurCourses from './pages/OurCourses/OurCourses'
import FAQ from './module/admin/pages/WebManagement/FAQ/FAQ';
import Questionpaper from './module/admin/pages/WebManagement/QuestionPaper/QuestionPaper'
import AddQuestionpaper from './module/admin/component/WebManagement/Questionpaper/AddQuestionPaper/AddQuestionpaper'
import LiveClass from './module/admin/pages/WebManagement/LiveClass/LiveClass'
import AddLiveClass from './module/admin/component/WebManagement/LiveClass/AddLiveClass'
import RecordedClass from './module/admin/pages/WebManagement/RecordedClass/RecordedClass'
import AddRecordedClass from './module/admin/component/WebManagement/RecordedClass/AddRecordedClass/AddRecordedClass'
import AddFaq from './module/admin/component/WebManagement/Faq/AddFaq/AddFaq'
// import StaticPage from './module/admin/pages/WebManagement/StaticPage/StaticPage'
import Aboutus from './module/admin/pages/WebManagement/AboutUs/AboutUs'
import WhyMankavit from './module/admin/pages/WebManagement/WhyMankavit/WhyMankavit'
import Testimonial from './module/admin/pages/WebManagement/Testinomial/Testinomial'
import Achievements from './module/admin/pages/WebManagement/Achievements/Achievements'
import AddAchievements from './module/admin/component/WebManagement/Achievement/AddAchievement/AddAchievement'
import Notification from './module/admin/pages/WebManagement/Notification/Notification'
import UserBaseLayout from './module/user/component/UserBaseLayout/UserBaseLayout'
import UserDashboard from './module/user/pages/UserDashboard/UserDashboard';
import SocialMedia from './module/admin/pages/WebManagement/SocialMedia/SocialMedia';
import AddStudent from './module/admin/component/Student/AddStudent/AddStudent'
import Mocktest from './module/admin/pages/Mocktest/Mocktest'
import Staticpage from './module/admin/pages/Staticpage/Staticpage'
import EditFaq from './module/admin/component/WebManagement/Faq/EditFaq/EditFaq'
import Profile from './module/user/pages/Profile/Profile'
import Mycourses from './module/user/pages/MyCourses/MyCourses'
import ContactSupport from './module/user/pages/ContactSupport/ContactSupport'
import TandC from './module/user/pages/TandC/TandC'
import UserNotifications from './module/user/pages/UserNotifications/UserNotifications'
import CourseDetails from './pages/CourseDetails/CourseDetails'
import WhyEntranceCourses from './pages/WhyEntranceCourses/WhyEntranceCourses'
import Category from './module/admin/pages/Category/Category'
import Addcategory from './module/admin/component/Category/AddCategory/AddCategory'
import EditAchievement from './module/admin/component/WebManagement/Achievement/EditAchievement/EditAchievement'
import EditQuestionPaper from './module/admin/component/WebManagement/Questionpaper/EditQuestionPaper/EditQuestionPaper'
import AddTestimonial from './module/admin/component/WebManagement/Testimonial/AddTestimonial/AddTestimonial'
import EditTestimonial from './module/admin/component/WebManagement/Testimonial/EditTestimonial/EditTestimonial'
import AdminMission from './module/admin/pages/WebManagement/AdminMission/AdminMission'
// import AddMission from './module/admin/component/WebManagement/AddMission/AddMission'
import EditStudent from './module/admin/component/Student/EditStudent/EditStudent'
import ViewStudent from './module/admin/component/Student/ViewStudent/ViewStudent'
import EditCourse from './module/admin/component/Course/EditCourse/EditCourse'
import ViewCourse from './module/admin/component/Course/ViewCourse/ViewCourse'
import EditSubject from './module/admin/component/Subject/EditSubject/EditSubject'
import ViewSubject from './module/admin/component/Subject/ViewSubject/ViewSubject'
import EditNotes from './module/admin/component/Notes/EditNotes/EditNotes'
import ViewNotes from './module/admin/component/Notes/ViewNotes/ViewNotes'
import EditCategory from './module/admin/component/Category/EditCategory/EditCategory'
import Lecturer from './module/admin/pages/Lecturer/Lecturer'
import AddLecturer from './module/admin/component/Lecturer/AddLecturer/AddLecturer'
import EditLecturer from './module/admin/component/Lecturer/EditLecturer/EditLecturer'
import ViewLecturer from './module/admin/component/Lecturer/ViewLecturer/ViewLecturer'
import EditLiveclass from './module/admin/component/WebManagement/LiveClass/EditLiveclass/EditLiveclass'
import EditRecordedClass from './module/admin/component/WebManagement/RecordedClass/EditRecordedClass/EditRecordedClass'
import EditMission from './module/admin/component/WebManagement/Mission/EditMission/EditMission'
import AddMission from './module/admin/component/WebManagement/Mission/AddMission/AddMission'
import Results from './pages/Results/Results'
import PrevYearsQuestion from './pages/PrevYearsQuestion/PrevYearsQuestion'
import ViewAchievement from './module/admin/component/WebManagement/Achievement/ViewAchievement/ViewAchievement'
import ViewTestimonial from './module/admin/component/WebManagement/Testimonial/ViewTestimonial/ViewTestimonial'
import ViewQuestionPaper from './module/admin/component/WebManagement/Questionpaper/ViewQuestionPaper/ViewQuestionPaper'
import ViewMission from './module/admin/component/WebManagement/Mission/ViewMission/ViewMission'
import OurCoursesDetails from './pages/OurCoursesDetails/OurCoursesDetails'
import WhyStudyWithUs from './module/admin/pages/WebManagement/WhyStudyWithUs/WhyStudyWithUs'
import AddWhyStudyWithUs from './module/admin/component/WebManagement/WhystudyWithUs/AddWhyStudyWithUs/AddWhyStudyWithUs'
import EditWhyStudyWithUs from './module/admin/component/WebManagement/WhystudyWithUs/EditWhyStudyWithUs/EditWhyStudyWithUs'
import ViewWhyStudyWithUs from './module/admin/component/WebManagement/WhystudyWithUs/ViewWhyStudyWithUs/ViewWhyStudyWithUs'
import CompletedCoursesPage from './pages/CompletedCoursesPage/CompletedCoursesPage'
import Blog from './module/admin/pages/WebManagement/Blog/Blog'
import AddBlog from './module/admin/component/WebManagement/blog/AddBlog/AddBlog'
import EditBlog from './module/admin/component/WebManagement/blog/EditBlog/EditBlog'
import ViewBlog from './module/admin/component/WebManagement/blog/ViewBlog/ViewBlog'
import ContinueCoursePage from './pages/ContinueCoursePage/ContinueCoursePage'
import ContactSupportView from './module/admin/pages/WebManagement/ContactSupportView/ContactSupportView'
import UserFeedback from './module/admin/pages/WebManagement/UserFeedback/UserFeedback'
import CoursesLiveclassPage from './pages/CoursesLiveclassPage/CoursesLiveclassPage'
import ViewRecordedClass from './module/admin/component/WebManagement/RecordedClass/ViewRecordedClass/ViewRecordedClass'
import KYCpage from './pages/KYCpage/KYCpage'
import UserBlog from './pages/UserBlog/UserBlog'
import ReadPost from './component/UserBlogComponents/ReadPost/ReadPost'
import StarttestPage from './module/user/pages/StarttestPage/StarttestPage'
import TestInstructionsPage from './module/user/pages/TestInstructionsPage/TestInstructionsPage'
import TestsubmittedPage from './module/user/pages/TestsubmittedPage/TestsubmittedPage'
import ExamSummary from './module/user/pages/ExamSummary/ExamSummary'
import TestResults from './module/user/pages/TestResults/TestResults'
import TextQuestionPage from './module/user/pages/TextQuestionPage/TextQuestionPage'
import AddMockTest from './module/admin/component/MockTestComponents/AddMockTests/AddMockTest'
import ViewMockTest from './module/admin/component/MockTestComponents/ViewMockTest/ViewMockTest'
import EditMockTest from './module/admin/component/MockTestComponents/EditMocktest/EditMocktest'
// import ContactSupport from './module/user/pages/ContactSupport/ContactSupport'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewUser from './module/admin/component/MockTestComponents/ViewUser/ViewUser'
import ViewUserResults from './module/admin/component/MockTestComponents/ViewUserResults/ViewUserResults'
import CourseCompletionPage from './component/CourseCompletionPage/CourseCompletionPage'
import CreateKYC from './module/user/component/CreateKYC/CreateKYC'
import ViewStudentFeedback from './module/admin/component/WebManagement/ViewStudentFeedback/ViewStudentFeedback'
import UpdateKYC from './module/admin/component/Student/updateKYC/updateKYC'
import ViewUserAttempts from './module/admin/component/MockTestComponents/ViewUserAttempts/ViewUserAttempts'
import ViewUserRanking from './module/admin/component/MockTestComponents/ViewUserRanking/ViewUserRanking'
import CreateMockTest from './module/admin/component/MockTestComponents/CreateMockTest/CreateMockTest'
import YouTube from './module/admin/pages/WebManagement/YouTube/YouTube'
import AddYoutube from './module/admin/component/WebManagement/YoutubeComponents/AddYoutube/AddYoutube'
import EditYoutube from './module/admin/component/WebManagement/YoutubeComponents/EditYoutube/EditYoutube.'
import ViewYoutube from './module/admin/component/WebManagement/YoutubeComponents/ViewYoutube/ViewYoutube'
import MockTestQuestionsList from './module/admin/component/MockTestComponents/MockTestQuestionsLists/MockTestQuestionsList'
import AllmocktestResults from './module/admin/component/MockTestComponents/MocktestResults/AllmocktestResults/AllmocktestResults'
import ViewMockTestResult from './module/admin/component/MockTestComponents/MocktestResults/ViewmocktestResults/ViewmocktestResults'
import EditMockTestResult from './module/admin/component/MockTestComponents/MocktestResults/EditmocktestResults/EditmocktestResults'
import StudentResults from './module/admin/component/MockTestComponents/MocktestResults/AllmocktestResults/StudentResult/StudentResult'
import MocktestStudentResult from './module/admin/component/MockTestComponents/MocktestResults/MocktestStudentResult/MocktestStudentResult'
import Meeting from './module/admin/pages/Meeting/Meeting'
import AddMeeting from './module/admin/pages/AddMeeting/AddMeeting'
import ZoomMeeting from './pages/ZoomMeeting/ZoomMeeting'
import ProtectedRoute from './pages/ProtectedAndPublicRoutes/ProtectedRoute'
import PublicRoute from './pages/ProtectedAndPublicRoutes/PublicRoute'
import UserRoute from './pages/ProtectedAndPublicRoutes/UserRoutes'
import NotFound from './pages/NotFound/NotFound'
import UserViewAttempResult from './module/user/component/UserViewAttempResult/UserViewAttempResult'
// import ScreenShot from './component/ScreenShot/ScreenShot'
import AdminManagement from './module/admin/pages/AdminManagement/AdminManagement'
import CreateAdmin from './module/admin/pages/CreateAdmin/CreateAdmin'
import EditAdmin from './module/admin/pages/EditAdmin/EditAdmin'
import Ticker from './module/admin/pages/Ticker/Ticker'

// import ScreenShot from './component/ScreenShot/ScreenShot'
import AdminRoute from './pages/ProtectedAndPublicRoutes/AdminRoute'
import SuperAdminRoute from './pages/ProtectedAndPublicRoutes/SuperAdminRoute'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ForgotOtpPage from './pages/ForgotOtpPage/ForgotOtpPage'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import { useEffect } from 'react'
import CouponManagement from './module/admin/pages/WebManagement/CouponManagement/CouponManagement'
import AddCoupon from './module/admin/component/AddCoupon/AddCoupon'
import EditCoupon from './module/admin/component/EditCoupon/EditCoupon'
import TermsAndConditions from './component/StaticPages/TermsandCondition/TermsandCondition'
import PrivacyPolicy from './component/StaticPages/PrivacyPolicy/PrivacyPolicy'
import ZoomIframeMeeting from './module/admin/pages/ZoomIframeMeeting/ZoomIframeMeeting'
import ZoomIframeMeetingUser from './pages/ZoomIframeMeetingUser/ZoomIframeMeetingUser'
// import ScreenShot from './component/ScreenShot/ScreenShot'
function App() {

 useEffect(() => {
  const disableRightClick = e => e.preventDefault()
    document.addEventListener('contextmenu', disableRightClick)
    return () => document.removeEventListener('contextmenu', disableRightClick)
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        {/* <ScreenShot /> */}
        {/* <ScreenShot /> */}
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes >
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/loginOtp" element={<OtpLogin />} />
          <Route path='/signup' element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/signupOtp" element={<OtpSignup />} />
          <Route path="/" element={<UserRoute><LandingPage /></UserRoute>} />
          <Route path="/aboutus" element={<UserRoute><AboutUs /></UserRoute>} />

          <Route path="/termsandcondition" element={<UserRoute><TermsAndConditions /></UserRoute>} />
          <Route path="/privacypolicy" element={<UserRoute><PrivacyPolicy /></UserRoute>} />

          <Route path="/ourcourses" element={<UserRoute><OurCourses /></UserRoute>} />
          <Route path="/coursedetails/:id" element={<UserRoute><CourseDetails /></UserRoute>} />
          <Route path="/why-entrance-courses" element={<UserRoute><WhyEntranceCourses /></UserRoute>} />
          <Route path='/results' element={<UserRoute><Results /></UserRoute>} />
          <Route path="/prev-years-question" element={<UserRoute><PrevYearsQuestion /></UserRoute>} />
          <Route path="/ourcoursedetails" element={<UserRoute> <OurCoursesDetails /> </UserRoute>} />
          <Route path="/course/liveclass/:courseId/:subjectid/:lectureId" element={<UserRoute><CoursesLiveclassPage /></UserRoute>} />

          <Route path="/coursedetails/completed-courses" element={<UserRoute><CompletedCoursesPage /></UserRoute>} />
          <Route path='/continueCourse/:id' element={<UserRoute><ContinueCoursePage /></UserRoute>} />
          <Route path='/kyc' element={<UserRoute><KYCpage /></UserRoute>} />
          <Route path="/userblog" element={<UserRoute><UserBlog /></UserRoute>} />
          <Route path='/userblog/post/:id' element={<UserRoute><ReadPost /></UserRoute>} />
          <Route path="/test" element={<UserRoute><Test /></UserRoute>} />

          <Route path='/start-test/:testId/:subjectId' element={<UserRoute><StarttestPage /></UserRoute>} />
          <Route path='/test-instructions/:testId/:subjectId' element={<UserRoute><TestInstructionsPage /></UserRoute>} />
          <Route path='/test-submitted' element={<UserRoute><TestsubmittedPage /></UserRoute>} />
          <Route path='/exam-summary' element={<UserRoute><ExamSummary /></UserRoute>} />
          <Route path='/test-results/:testId/:subjectId/:attemptId' element={<UserRoute><TestResults /></UserRoute>} />
          <Route path='/user-view-results/:userId/:mockTestId' element={<UserRoute><UserViewAttempResult /></UserRoute>} />

          <Route path='/createkyc' element={<UserRoute><CreateKYC /></UserRoute>} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/forgot-password-otp' element={<ForgotOtpPage />} />
          <Route path='/reset-password' element={<ResetPassword />} />

          <Route path='/test-question/:testId/:subjectId/:attemptId' element={<UserRoute><TextQuestionPage /></UserRoute>} />
          <Route path='/courseComplte/:courseId' element={<UserRoute><CourseCompletionPage /></UserRoute>} />
          <Route path='/zoom-meeting' element={<ZoomMeeting />} />
          <Route path='/*' element={<UserRoute><NotFound /></UserRoute>} />
          <Route path="/user" element={<ProtectedRoute roles={['user']}><UserBaseLayout /></ProtectedRoute>}>
            <Route index element={<UserDashboard />} />t
            <Route path="profile/:id" element={<Profile />} />
            <Route path="tandc" element={<TandC />} />
            <Route path='my-courses' element={<Mycourses />} />
            <Route path="contactsupport" element={<ContactSupport />} />
            <Route path="notification" element={<UserNotifications />} />

            <Route path="completed-courses" element={<CompletedCoursesPage />} />
            <Route path='meeting-join' element={<ZoomIframeMeetingUser />} />

            {/* </Route> */}

          </Route>




          <Route path="/admin" element={<ProtectedRoute roles={['admin']}><BaseLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="course-management" element={<AdminRoute Access={"courseManagement"} ><Course /></AdminRoute>} />
            <Route path="course-management/create" element={<AdminRoute Access={"courseManagement"} ><AddCourse /></AdminRoute>} />
            <Route path="course-management/edit/:id" element={<AdminRoute Access={"courseManagement"} ><EditCourse /></AdminRoute>} />
            <Route path="course-management/view/:id" element={<AdminRoute Access={"courseManagement"} ><ViewCourse /></AdminRoute>} />

            <Route path="meeting-management" element={<Meeting />} />
            <Route path="meeting-management/create" element={<AddMeeting />} />
            <Route path='meeting-hosting' element={<ZoomIframeMeeting/>} />

            <Route path="student-management" element={<AdminRoute Access={"studentManagement"} ><StudentManagement /></AdminRoute>} />
            <Route path="student-management/create" element={<AdminRoute Access={"studentManagement"}><AddStudent /></AdminRoute>} />
            <Route path="student-management/edit/:userId" element={<AdminRoute Access={"studentManagement"}><EditStudent /></AdminRoute>} />
            <Route path="student-management/view/:id" element={<AdminRoute Access={"studentManagement"}><ViewStudent /></AdminRoute>} />
            <Route path='student-management/update-kyc/:userId' element={<AdminRoute Access={"studentManagement"}><UpdateKYC /></AdminRoute>} />

            <Route path="mock-test" element={<AdminRoute Access={"mockTestManagement"}><Mocktest /></AdminRoute>} />
            <Route path="mock-test/create-mock-test" element={<AdminRoute Access={"mockTestManagement"}><CreateMockTest /></AdminRoute>} />
            <Route path="mock-test/questions-list/:mockTestId" element={<AdminRoute Access={"mockTestManagement"}><MockTestQuestionsList /></AdminRoute>} />
            <Route path="mock-test/create" element={<AdminRoute Access={"mockTestManagement"}><AddMockTest /></AdminRoute>} />
            <Route path="mock-test/view/:id" element={<AdminRoute Access={"mockTestManagement"}><ViewMockTest /></AdminRoute>} />
            <Route path='mock-test/edit/:mockTestId' element={<AdminRoute Access={"mockTestManagement"}><EditMockTest /></AdminRoute>} />
            <Route path='mock-test/user-result/:mockTestId/:subjectId' element={<AdminRoute Access={"mockTestManagement"}><ViewUser /></AdminRoute>} />
            <Route path='mock-test/user-ranking/:mockTestId/:subjectId' element={<AdminRoute Access={"mockTestManagement"}><ViewUserRanking /></AdminRoute>} />
            <Route path='mock-test/user-attempts/:mockTestId/:userId' element={<AdminRoute Access={"mockTestManagement"}><ViewUserAttempts /></AdminRoute>} />
            <Route path='mock-test/user-result/view-result/:attemptId' element={<AdminRoute Access={"mockTestManagement"}><ViewUserResults /></AdminRoute>} />

            <Route path='results' element={<AdminRoute Access={"mockTestManagement"}><AllmocktestResults /></AdminRoute>} />
            <Route path='results/view/:id' element={<AdminRoute Access={"mockTestManagement"}><ViewMockTestResult /></AdminRoute>} />
            <Route path="results/edit/:id" element={<AdminRoute Access={"mockTestManagement"}><EditMockTestResult /></AdminRoute>} />
            <Route path='results/studentName/:userId' element={<AdminRoute Access={"mockTestManagement"}><StudentResults /></AdminRoute>} />
            <Route path='results/user-attempts/attempt/:attemptId' element={<AdminRoute Access={"mockTestManagement"}><MocktestStudentResult /></AdminRoute>} />

            <Route path="payment-management" element={<AdminRoute Access={"paymentManagement"} ><Payment /></AdminRoute>} />

            <Route path="subject-management" element={<AdminRoute Access={"courseManagement"} ><Subjects /></AdminRoute>} />
            <Route path="subject-management/create" element={<AdminRoute Access={"courseManagement"} ><AddSubject /></AdminRoute>} />
            <Route path="subject-management/edit/:id" element={<AdminRoute Access={"courseManagement"} ><EditSubject /></AdminRoute>} />
            <Route path="subject-management/view/:id" element={<AdminRoute Access={"courseManagement"} ><ViewSubject /></AdminRoute>} />

            <Route path="notes-management" element={<AdminRoute Access={"courseManagement"} ><NotesManagement /></AdminRoute>} />
            <Route path="notes-management/create" element={<AdminRoute Access={"courseManagement"} ><AddNote /></AdminRoute>} />
            <Route path="notes-management/edit/:id" element={<AdminRoute Access={"courseManagement"} ><EditNotes /></AdminRoute>} />
            <Route path="notes-management/view/:id" element={<AdminRoute Access={"courseManagement"} ><ViewNotes /></AdminRoute>} />

            <Route path="category-management" element={<AdminRoute Access={"courseManagement"} ><Category /></AdminRoute>} />
            <Route path="category-management/create" element={<AdminRoute Access={"courseManagement"} ><Addcategory /></AdminRoute>} />
            <Route path="category-management/edit/:id" element={<AdminRoute Access={"courseManagement"} ><EditCategory /></AdminRoute>} />

            <Route path="lecturer-management" element={<AdminRoute Access={"courseManagement"} ><Lecturer /></AdminRoute>} />
            <Route path="lecturer-management/create" element={<AdminRoute Access={"courseManagement"} ><AddLecturer /></AdminRoute>} />
            <Route path="lecturer-management/edit/:id" element={<AdminRoute Access={"courseManagement"} ><EditLecturer /></AdminRoute>} />
            <Route path="lecturer-management/view/:id" element={<AdminRoute Access={"courseManagement"} ><ViewLecturer /></AdminRoute>} />

            <Route path="recorded-class" element={<AdminRoute Access={"courseManagement"} ><RecordedClass /></AdminRoute>} />
            <Route path="recorded-classes/create" element={<AdminRoute Access={"courseManagement"} ><AddRecordedClass /></AdminRoute>} />
            <Route path="recorded-classes/edit/:id" element={<AdminRoute Access={"courseManagement"} ><EditRecordedClass /></AdminRoute>} />
            <Route path="recorded-classes/view/:id" element={<AdminRoute Access={"courseManagement"} ><ViewRecordedClass /></AdminRoute>} />

            <Route path="static-page" element={<AdminRoute Access={"staticPageManagement"} ><Staticpage /></AdminRoute>} />


            {/* <Route path="static-pages" element={<StaticPage />} /> */}

            <Route path="web-management/home" element={<AdminRoute Access={"webManagement"} ><Homepage /></AdminRoute>} />

            <Route path="web-management/faq" element={<AdminRoute Access={"webManagement"} ><FAQ /></AdminRoute>} />
            <Route path="web-management/faq/create" element={<AdminRoute Access={"webManagement"} ><AddFaq /></AdminRoute>} />
            <Route path="web-management/faq/edit/:id" element={<AdminRoute Access={"webManagement"} ><EditFaq /></AdminRoute>} />

            <Route path="web-management/question-paper" element={<AdminRoute Access={"webManagement"} ><Questionpaper /></AdminRoute>} />
            <Route path="web-management/question-paper/create" element={<AdminRoute Access={"webManagement"} > <AddQuestionpaper /> </AdminRoute>} />
            <Route path="web-management/question-paper/edit/:id" element={<AdminRoute Access={"webManagement"} ><EditQuestionPaper /></AdminRoute>} />
            <Route path="web-management/question-paper/view/:id" element={<AdminRoute Access={"webManagement"} ><ViewQuestionPaper /></AdminRoute>} />

            <Route path="web-management/live-classes" element={<AdminRoute Access={"webManagement"} ><LiveClass /></AdminRoute>} />
            <Route path="web-management/live-classes/create" element={<AdminRoute Access={"webManagement"} ><AddLiveClass /></AdminRoute>} />
            <Route path="web-management/live-classes/edit/:id" element={<AdminRoute Access={"webManagement"} ><EditLiveclass /></AdminRoute>} />

            {/* <Route path="web-management/recorded-class" element={<RecordedClass />} />
            <Route path="web-management/recorded-classes/create" element={<AddRecordedClass />} />
            <Route path="web-management/recorded-classes/edit/:id" element={<EditRecordedClass />} />
            <Route path="web-management/recorded-classes/view/:id" element={<ViewRecordedClass />} /> */}

            <Route path="web-management/aboutus" element={<AdminRoute Access={"webManagement"} ><Aboutus /></AdminRoute>} />
            <Route path="web-management/why-mankavit" element={<AdminRoute Access={"webManagement"} ><WhyMankavit /></AdminRoute>} />

            <Route path="web-management/testinomial" element={<AdminRoute Access={"webManagement"} ><Testimonial /></AdminRoute>} />
            <Route path="web-management/testinomial/create" element={<AdminRoute Access={"webManagement"} ><AddTestimonial /> </AdminRoute>} />
            <Route path="web-management/testinomial/edit/:id" element={<AdminRoute Access={"webManagement"} ><EditTestimonial /></AdminRoute>} />
            <Route path="web-management/testinomial/view/:id" element={<AdminRoute Access={"webManagement"} ><ViewTestimonial /></AdminRoute>} />

            <Route path="web-management/achievement" element={<AdminRoute Access={"webManagement"} ><Achievements /></AdminRoute>} />
            <Route path="web-management/achievement/create" element={<AdminRoute Access={"webManagement"} ><AddAchievements /></AdminRoute>} />
            <Route path='web-management/achievement/edit/:id' element={<AdminRoute Access={"webManagement"} ><EditAchievement /></AdminRoute>} />
            <Route path="web-management/achievement/view/:id" element={<AdminRoute Access={"webManagement"} ><ViewAchievement /></AdminRoute>} />

            <Route path="web-management/social-media" element={<AdminRoute Access={"webManagement"} ><SocialMedia /></AdminRoute>} />

            <Route path="web-management/notification" element={<AdminRoute Access={"webManagement"} ><Notification /></AdminRoute>} />
            <Route path="web-management/mission" element={<AdminRoute Access={"webManagement"} ><AdminMission /></AdminRoute>} />
            <Route path="web-management/mission/create" element={<AdminRoute Access={"webManagement"} ><AddMission /></AdminRoute>} />
            <Route path="web-management/mission/edit/:id" element={<AdminRoute Access={"webManagement"} ><EditMission /></AdminRoute>} />
            <Route path="web-management/mission/view/:id" element={<AdminRoute Access={"webManagement"} ><ViewMission /></AdminRoute>} />

            <Route path="web-management/why-study-with-us" element={<AdminRoute Access={"webManagement"} ><WhyStudyWithUs /></AdminRoute>} />
            <Route path="web-management/why-study-with-us/create" element={<AdminRoute Access={"webManagement"} ><AddWhyStudyWithUs /></AdminRoute>} />
            <Route path="web-management/why-study-with-us/edit/:id" element={<AdminRoute Access={"webManagement"} ><EditWhyStudyWithUs /></AdminRoute>} />
            <Route path="web-management/why-study-with-us/view/:id" element={<AdminRoute Access={"webManagement"} ><ViewWhyStudyWithUs /></AdminRoute>} />

            <Route path="web-management/blog" element={<AdminRoute Access={"webManagement"} ><Blog /></AdminRoute>} />
            <Route path="web-management/blog/create" element={<AdminRoute Access={"webManagement"} ><AddBlog /></AdminRoute>} />
            <Route path="web-management/blog/edit/:id" element={<AdminRoute Access={"webManagement"} ><EditBlog /></AdminRoute>} />
            <Route path="web-management/blog/view/:id" element={<AdminRoute Access={"webManagement"} ><ViewBlog /></AdminRoute>} />

            <Route path="web-management/contact-support" element={<AdminRoute Access={"webManagement"} ><ContactSupportView /></AdminRoute>} />

            <Route path="web-management/user-feedback" element={<AdminRoute Access={"webManagement"} ><UserFeedback /></AdminRoute>} />
            <Route path="web-management/user-feedback/view/:id" element={<ViewStudentFeedback />} />

            <Route path='web-management/youtubelinks' element={<AdminRoute Access={"webManagement"} ><YouTube /></AdminRoute>} />
            <Route path='web-management/youtubelinks/create' element={<AdminRoute Access={"webManagement"} ><AddYoutube /></AdminRoute>} />
            <Route path='web-management/youtubelinks/edit/:id' element={<AdminRoute Access={"webManagement"} ><EditYoutube /></AdminRoute>} />
            <Route path="web-management/youtubelinks/view/:id" element={<AdminRoute Access={"webManagement"} ><ViewYoutube /></AdminRoute>} />

            <Route path="web-management/coupon" element={<AdminRoute Access={"webManagement"} ><CouponManagement /></AdminRoute>} />
            <Route path="web-management/coupon/create" element={<AdminRoute Access={"webManagement"} ><AddCoupon /></AdminRoute>} />
            <Route path="web-management/coupon/edit/:id" element={<AdminRoute Access={"webManagement"} ><EditCoupon/></AdminRoute>} />
            {/* <Route path="web-management/faq/view/:id" element={<AdminRoute Access={"webManagement"} ><ViewFaq /></AdminRoute>} /> */}

            <Route path="web-management/ticker" element={<AdminRoute Access={"webManagement"} ><Ticker /></AdminRoute>} />

           
            <Route path='subadmins-management' element={<SuperAdminRoute><AdminManagement /></SuperAdminRoute>} />
            <Route path='subadmins-management/create' element={<SuperAdminRoute><CreateAdmin /></SuperAdminRoute>} />
            <Route path='subadmins-management/edit/:id' element={<SuperAdminRoute><EditAdmin /> </SuperAdminRoute>} />
            {/* <Route path="subadmins-management/view/:id" element={<ViewSubAdmin />} /> */}

          </Route>


        </Routes>
      </Router>
    </ThemeProvider>
  )
}


export default App

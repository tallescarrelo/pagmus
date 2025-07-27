import { HashRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import AccessDeniedPage from "./pages/AccessDeniedPage";
import AddBlogPage from "./pages/AddBlogPage";
import AddUserPage from "./pages/AddUserPage";
import AlertPage from "./pages/AlertPage";
import AssignRolePage from "./pages/AssignRolePage";
import AvatarPage from "./pages/AvatarPage";
import BadgesPage from "./pages/BadgesPage";
import BlankPagePage from "./pages/BlankPagePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogPage from "./pages/BlogPage";
import ButtonPage from "./pages/ButtonPage";
import CalendarMainPage from "./pages/CalendarMainPage";
import CardPage from "./pages/CardPage";
import CarouselPage from "./pages/CarouselPage";
import ChatEmptyPage from "./pages/ChatEmptyPage";
import ChatMessagePage from "./pages/ChatMessagePage";
import ChatProfilePage from "./pages/ChatProfilePage";
import CodeGeneratorNewPage from "./pages/CodeGeneratorNewPage";
import CodeGeneratorPage from "./pages/CodeGeneratorPage";
import ColorsPage from "./pages/ColorsPage";
import ColumnChartPage from "./pages/ColumnChartPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import CompanyPage from "./pages/CompanyPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import DropdownPage from "./pages/DropdownPage";
import EmailPage from "./pages/EmailPage";
import ErrorPage from "./pages/ErrorPage";
import FaqPage from "./pages/FaqPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import FormLayoutPage from "./pages/FormLayoutPage";
import FormPage from "./pages/FormPage";
import FormValidationPage from "./pages/FormValidationPage";
import GalleryGridPage from "./pages/GalleryGridPage";
import GalleryHoverPage from "./pages/GalleryHoverPage";
import GalleryMasonryPage from "./pages/GalleryMasonryPage";
import GalleryPage from "./pages/GalleryPage";
import HomePageEight from "./pages/HomePageEight";
import HomePageEleven from "./pages/HomePageEleven";
import HomePageFive from "./pages/HomePageFive";
import HomePageFour from "./pages/HomePageFour";
import HomePageNine from "./pages/HomePageNine";
import HomePageSeven from "./pages/HomePageSeven";
import HomePageSix from "./pages/HomePageSix";
import HomePageTen from "./pages/HomePageTen";
import HomePageThree from "./pages/HomePageThree";
import HomePageTwo from "./pages/HomePageTwo";
import ImageGeneratorPage from "./pages/ImageGeneratorPage";
import ImageUploadPage from "./pages/ImageUploadPage";
import InvoiceAddPage from "./pages/InvoiceAddPage";
import InvoiceEditPage from "./pages/InvoiceEditPage";
import InvoicePreviewPage from "./pages/InvoicePreviewPage";
import KanbanPage from "./pages/KanbanPage";
import LanguagePage from "./pages/LanguagePage";
import LineChartPage from "./pages/LineChartPage";
import ListPage from "./pages/ListPage";
import MaintenancePage from "./pages/MaintenancePage";
import MarketplaceDetailsPage from "./pages/MarketplaceDetailsPage";
import MarketplacePage from "./pages/MarketplacePage";
import NotificationAlertPage from "./pages/NotificationAlertPage";
import NotificationPage from "./pages/NotificationPage";
import PaginationPage from "./pages/PaginationPage";
import PaymentGatewayPage from "./pages/PaymentGatewayPage";
import PieChartPage from "./pages/PieChartPage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import ProgressPage from "./pages/ProgressPage";
import RadioPage from "./pages/RadioPage";
import RoleAccessPage from "./pages/RoleAccessPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import StarRatingPage from "./pages/StarRatingPage";
import StarredPage from "./pages/StarredPage";
import SwitchPage from "./pages/SwitchPage";
import TableBasicPage from "./pages/TableBasicPage";
import TableDataPage from "./pages/TableDataPage";
import TabsPage from "./pages/TabsPage";
import TagsPage from "./pages/TagsPage";
import TermsConditionPage from "./pages/TermsConditionPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import TextGeneratorNewPage from "./pages/TextGeneratorNewPage";
import TextGeneratorPage from "./pages/TextGeneratorPage";
import ThemePage from "./pages/ThemePage";
import TooltipPage from "./pages/TooltipPage";
import TypographyPage from "./pages/TypographyPage";
import UsersGridPage from "./pages/UsersGridPage";
import UsersListPage from "./pages/UsersListPage";
import VideoGeneratorPage from "./pages/VideoGeneratorPage";
import VideosPage from "./pages/VideosPage";
import ViewDetailsPage from "./pages/ViewDetailsPage";
import ViewProfilePage from "./pages/ViewProfilePage";

import VoiceGeneratorPage from "./pages/VoiceGeneratorPage";
import WalletPage from "./pages/WalletPage";
import WidgetsPage from "./pages/WidgetsPage";
import WizardPage from "./pages/WizardPage";

import AffiliatesOfMyProductsPage from "./pages/affiliate/AffiliatesOfMyProductsPage";
import MyAffiliateProductsPage from "./pages/affiliate/MyAffiliateProductsPage";

import ProductsAffiliates from "./pages/affiliate/ProductsAffiliates";
import MyProductsPage from "./pages/products/MyProductsPage";
import RegisterProductPage from "./pages/products/RegisterProduct";
import ViewProductPage from "./pages/products/ViewProductPage";
import ProductGridPage from "./pages/store/ProductGridPage";

import InvoiceListPage from "./pages/sales/InvoiceListPage";
import ChurnPage from "./pages/sales/ChurnPage";
import AbandonPage from "./pages/sales/AbandonPage";
import PerformanceAffiliates from "./pages/affiliate/PerformanceAffiliates";
import ReversalPage from "./pages/sales/ReversalPage";
import IndicatorsPage from "./pages/sales/IndicatorsPage";

import IntegrationPage from "./pages/integration/IntegrationPage";
import FreightPage from "./pages/tools/FreightPage";
import PostbackPage from "./pages/tools/PostbackPage";

import ApiPage from "./pages/tools/ApiPage";

import PendingPage from "./pages/delivery/Pending";
import Forwarded from "./pages/delivery/Forwarded";
import Completed from "./pages/delivery/Completed";
import BanksPage from "./pages/banks/Banks";
import Withdrawals from "./pages/banks/Withdrawals";
import TeamPage from "./pages/tools/TeamPage";
import AfterPayPage from "./pages/sales/AfterPayPage";


function App() {
  return (
    <HashRouter future={{ v7_relativeSplatPath: true }}>
      <RouteScrollToTop />
      <Routes>
        {/* Rotas Públicas */}
        <Route exact path="/index-2" element={<HomePageTwo />} />
        <Route exact path="/index-3" element={<HomePageThree />} />
        <Route exact path="/index-4" element={<HomePageFour />} />
        <Route exact path="/index-5" element={<HomePageFive />} />
        <Route exact path="/index-6" element={<HomePageSix />} />
        <Route exact path="/index-7" element={<HomePageSeven />} />
        <Route exact path="/index-8" element={<HomePageEight />} />
        <Route exact path="/index-9" element={<HomePageNine />} />
        <Route exact path="/index-10" element={<HomePageTen />} />
        <Route exact path="/index-11" element={<HomePageEleven />} />

        {/* SL */}
        <Route exact path="/add-user" element={<AddUserPage />} />
        <Route exact path="/alert" element={<AlertPage />} />
        <Route exact path="/assign-role" element={<AssignRolePage />} />
        <Route exact path="/avatar" element={<AvatarPage />} />
        <Route exact path="/badges" element={<BadgesPage />} />
        <Route exact path="/button" element={<ButtonPage />} />
        <Route exact path="/calendar-main" element={<CalendarMainPage />} />
        <Route exact path="/calendar" element={<CalendarMainPage />} />
        <Route exact path="/card" element={<CardPage />} />
        <Route exact path="/carousel" element={<CarouselPage />} />
        <Route exact path="/chat-empty" element={<ChatEmptyPage />} />
        <Route exact path="/chat-message" element={<ChatMessagePage />} />
        <Route exact path="/chat-profile" element={<ChatProfilePage />} />
        <Route exact path="/code-generator" element={<CodeGeneratorPage />} />
        <Route
          exact
          path="/code-generator-new"
          element={<CodeGeneratorNewPage />}
        />
        <Route exact path="/colors" element={<ColorsPage />} />
        <Route exact path="/column-chart" element={<ColumnChartPage />} />
        <Route exact path="/company" element={<CompanyPage />} />
        <Route exact path="/currencies" element={<CurrenciesPage />} />
        <Route exact path="/dropdown" element={<DropdownPage />} />
        <Route exact path="/email" element={<EmailPage />} />
        <Route exact path="/faq" element={<FaqPage />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/form-layout" element={<FormLayoutPage />} />
        <Route exact path="/form-validation" element={<FormValidationPage />} />
        <Route exact path="/form" element={<FormPage />} />

        <Route exact path="/gallery" element={<GalleryPage />} />
        <Route exact path="/gallery-grid" element={<GalleryGridPage />} />
        <Route exact path="/gallery-masonry" element={<GalleryMasonryPage />} />
        <Route exact path="/gallery-hover" element={<GalleryHoverPage />} />

        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/add-blog" element={<AddBlogPage />} />

        <Route exact path="/testimonials" element={<TestimonialsPage />} />
        <Route exact path="/coming-soon" element={<ComingSoonPage />} />
        <Route exact path="/access-denied" element={<AccessDeniedPage />} />
        <Route exact path="/maintenance" element={<MaintenancePage />} />
        <Route exact path="/blank-page" element={<BlankPagePage />} />

        <Route exact path="/image-generator" element={<ImageGeneratorPage />} />
        <Route exact path="/image-upload" element={<ImageUploadPage />} />
        <Route exact path="/invoice-add" element={<InvoiceAddPage />} />
        <Route exact path="/invoice-edit" element={<InvoiceEditPage />} />

        <Route exact path="/invoice-list" element={<InvoiceListPage />} />
        <Route exact path="/churn" element={<ChurnPage />} />
        <Route exact path="/abandon" element={<AbandonPage />} />
        <Route exact path="/performance-affiliates" element={<PerformanceAffiliates />} />
        <Route exact path="/reversal" element={<ReversalPage />} />
        <Route exact path="/indicators" element={<IndicatorsPage />} />

        <Route exact path="/api" element={<ApiPage />} />
        <Route exact path="/integration" element={<IntegrationPage />} />

        <Route exact path="/delivery-pending" element={<PendingPage />} />
        <Route exact path="/delivery-forwarded" element={<Forwarded />} />
        <Route exact path="/delivery-completed" element={<Completed />} />

        <Route exact path="/banks" element={<BanksPage />} />
        <Route exact path="/withdrawals" element={<Withdrawals />} />
        <Route exact path="/frete" element={<FreightPage />} />
        <Route exact path="/webhook" element={<PostbackPage />} />
        <Route exact path="/team" element={<TeamPage />} />

        <Route exact path="/afterpay" element={<AfterPayPage />} />
                
        <Route exact path="/invoice-preview" element={<InvoicePreviewPage />} />
        <Route exact path="/kanban" element={<KanbanPage />} />
        <Route exact path="/language" element={<LanguagePage />} />
        <Route exact path="/line-chart" element={<LineChartPage />} />
        <Route exact path="/list" element={<ListPage />} />
        <Route
          exact
          path="/marketplace-details"
          element={<MarketplaceDetailsPage />}
        />
        <Route exact path="/marketplace" element={<MarketplacePage />} />
        <Route
          exact
          path="/notification-alert"
          element={<NotificationAlertPage />}
        />
        <Route exact path="/notification" element={<NotificationPage />} />
        <Route exact path="/pagination" element={<PaginationPage />} />
        <Route exact path="/payment-gateway" element={<PaymentGatewayPage />} />
        <Route exact path="/pie-chart" element={<PieChartPage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/progress" element={<ProgressPage />} />
        <Route exact path="/radio" element={<RadioPage />} />
        <Route exact path="/role-access" element={<RoleAccessPage />} />
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="/sign-up" element={<SignUpPage />} />
        <Route exact path="/star-rating" element={<StarRatingPage />} />
        <Route exact path="/starred" element={<StarredPage />} />
        <Route exact path="/switch" element={<SwitchPage />} />
        <Route exact path="/table-basic" element={<TableBasicPage />} />
        <Route exact path="/table-data" element={<TableDataPage />} />
        <Route exact path="/tabs" element={<TabsPage />} />
        <Route exact path="/tags" element={<TagsPage />} />
        <Route exact path="/terms-condition" element={<TermsConditionPage />} />
        <Route
          exact
          path="/text-generator-new"
          element={<TextGeneratorNewPage />}
        />
        <Route exact path="/text-generator" element={<TextGeneratorPage />} />
        <Route exact path="/theme" element={<ThemePage />} />
        <Route exact path="/tooltip" element={<TooltipPage />} />
        <Route exact path="/typography" element={<TypographyPage />} />
        <Route exact path="/users-grid" element={<UsersGridPage />} />
        <Route exact path="/users-list" element={<UsersListPage />} />
        <Route exact path="/view-details" element={<ViewDetailsPage />} />
        <Route exact path="/video-generator" element={<VideoGeneratorPage />} />
        <Route exact path="/videos" element={<VideosPage />} />
        <Route exact path="/view-profile" element={<ViewProfilePage />} />
        <Route exact path="/voice-generator" element={<VoiceGeneratorPage />} />
        <Route exact path="/wallet" element={<WalletPage />} />
        <Route exact path="/widgets" element={<WidgetsPage />} />
        <Route exact path="/wizard" element={<WizardPage />} />
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="/sign-up" element={<SignUpPage />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Rotas Privadas */}
        <Route
          exact
          path="/Dashboard"
          element={
            <PrivateRoute>
              <HomePageTen />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/view-profile"
          element={
            <PrivateRoute>
              <ViewProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/products/products"
          element={
            <PrivateRoute>
              <MyProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/products/register"
          element={
            <PrivateRoute>
              <RegisterProductPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/products/view-product"
          element={
            <PrivateRoute>
              <ViewProductPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/store/store-products"
          element={
            <PrivateRoute>
              <ProductGridPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/affiliate/my-affiliate-products"
          element={
            <PrivateRoute>
              <MyAffiliateProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/affiliate/affiliates-of-my-products"
          element={
            <PrivateRoute>
              <AffiliatesOfMyProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/products/affiliates"
          element={
            <PrivateRoute>
              <ProductsAffiliates />
            </PrivateRoute>
          }
        />

        {/* Outras rotas públicas */}
        <Route exact path="/error" element={<ErrorPage />} />
        <Route exact path="/access-denied" element={<AccessDeniedPage />} />
        <Route exact path="/maintenance" element={<MaintenancePage />} />
        <Route exact path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

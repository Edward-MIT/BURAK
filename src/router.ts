import express,{Request, Response} from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";
import productController from "./controllers/product.controller";
import ordertController from "./controllers/order.controller";


/* Member */
router.get("/member/restaurant", memberController.getRestaurant);
router.post('/member/login',memberController.login);
router.post("/member/signup",memberController.signup);
router.post("/member/logout", memberController.verifyAuth, memberController.logout);
router.get("/member/detail",memberController.verifyAuth, memberController.getMemberDetail);

router.post("/member/update", memberController.verifyAuth, uploader("members").single("memberImage"), memberController.updateMember );

router.get("/member/top-users", memberController.getTopUsers);

/* Products */

router.get("/product/all/", productController.getProducts);
router.get("/product/:id", memberController.retrieveAuth, productController.getProduct);

/* Orders */

router.post("/order/create", memberController.verifyAuth, ordertController.createOrder );

router.get("/order/all", memberController.verifyAuth, ordertController.getMyOrders);

router.post("/order/update", memberController.verifyAuth , ordertController.updateOrder);



export default router;
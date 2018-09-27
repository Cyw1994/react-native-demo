import { Dimensions, Platform } from "react-native";
import * as GlobalVariable from "./global";
import Common from "./Common";

Common.initGlobalHostURL();
Common.getAppBundle(); //获取当前Bundle ID
Common.getBuildMode(); //获取当前build模式， debug/release

export const C4C_HOST = GlobalVariable.appHost.C4C_HOST;
export const SCP_HOST_URL = GlobalVariable.appHost.SCP_HOST_URL;
export const C4C_LEAD_SOURCE = GlobalVariable.appHost.C4C_LEAD_SOURCE;
export const SCIURL = GlobalVariable.appHost.SCIURL;
export const DOCUMENT_SERVICE_HOST_URL = GlobalVariable.appHost.DOCUMENT_SERVICE_HOST_URL;

export const C4C_VIN_URL = C4C_HOST + "/cust/v1/individualproduct/IndividualProductCollection?$format=json";
export const C4C_GET_CSRF_TOKEN = C4C_HOST + "/v1/c4codata/LeanLeadGenderCollection";
export const APP_UPDATE_HOST_URL = "http://api.fir.im/apps/latest";
export const APP_BUNDLE = GlobalVariable.app.bundleID;  //(Platform.OS === "android") ? "com.cherymobile" : "com.chery.crmdev";
export const APP_VERSION_CHECK_URL = APP_UPDATE_HOST_URL + "/" + APP_BUNDLE + "?api_token=36f55b0b1c55313cb89577ef1ba174d2";
export const C4C_ODATA = C4C_HOST + "/cust/v1";
export const C4C_ODATA_V1 = C4C_HOST + "/v1";
export const LEAN_LEAD_COLLECTION_SUFFIX = "c4codata/LeanLeadCollection"; //Lead BO的名字
export const C4C_LEAN_LEAD_COLLECTION = C4C_ODATA_V1 + "/" + LEAN_LEAD_COLLECTION_SUFFIX; //标准的Lead BO
export const C4C_LEAD_COLLECTION = C4C_ODATA + "/lead/LeadCollection"; //自建的lead BO
export const C4C_POINT_RECORD_COLLECTION = C4C_ODATA + "/leadpointrecords/BO_LeadPointRecordsCollection"; //查询积分变更记录

export const SCPLOGOUT = SCP_HOST_URL + "/authentication/logout";
export const SCP_USERDETAIL_URL = SCP_HOST_URL + "/api/v1/sciuserdetail";
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const FLOAT_REGEX = /^\d+(\.\d+)?$/;
export const MOBILE_REGEX = /^1(3|4|5|6|7|8|9)\d{9}$/;
export const PWD_REGEX = /^(((?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9])(?=.*[!"#\$%&'\(\)\*\+,-\./:;\<=\>\?@[\]\\^_`{\|}~]))|((?=.*[A-Z])(?=.*[a-z])(?=.*[!"#\$%&'\(\)\*\+,-\./:;\<=\>\?@[\]\\^_`{\|}~]))|((?=.*[0-9])(?=.*[a-z])(?=.*[!"#\$%&'\(\)\*\+,-\./:;\<=\>\?@[\]\\^_`{\|}~]))).{8,255}$/;
export const SCP_MESSAGE_TEMP = SCP_HOST_URL + "/api/v1/users/";
export const SCP_POST_MESSAGE_TEMP = SCP_HOST_URL + "/api/v1/users/smstemplates";
//export const SCP_SWAGGER_URL = SCP_HOST_URL + "/swagger-ui.html";
export const SCP_LOGIN_URL = GlobalVariable.appHost.SCP_LOGIN_URL;
export const SCP_SWAGGER_URL = SCP_HOST_URL + "/index.html";
export const SCP_RESTPWD_URL = SCP_HOST_URL + "/api/v1/authentication/password"; //修改密码的URL
export const SCP_EVENT_BUSSINESS_URL = SCP_HOST_URL + "/api/v1/businessEvents/app"; // 事件机制URL
export const SCP_MANAGER_REPORT_URL = SCP_HOST_URL + "/api/v1/leadReport/manager/"; // 获取经理首页报表URL
export const SCP_SALES_REPORT_URL = SCP_HOST_URL + "/api/v1/leadReport/sales/"; // 获取销售顾问首页报表URL
export const SCP_SALES_TOTAL_PONIT_URL = SCP_HOST_URL + "/api/v1/salesPoints/"; // 获取销售顾问积分总额URL
export const SCP_SALES_PONIT_RULES_URL = SCP_HOST_URL + "/api/v1/leadPointRules/"; // 获取销售顾问积分规则URL

export const PAGE_LENGTH = 20;
export const PAGE_LENGTH_FOR_LEAD_LIST = 10; //针对线索列表的单个Page请求数目
export const COLOR = {
	RED: "#da3456",
	DARKRED: "#DA1E46",
	DARKGREY: "#252525",
	WHITE: "#ffffff",
	YELLOW: "#ffbe4b",
	LIGHTYELLOW: "#e2c258",
	GREY: "#848693",
	LIGHTGREY: "#ecedf1",
	BLACK_000: "#000",
	GREY_666: "#666",
	GREY_999: "#999",
	GREY_888: "#888888",
	GREY_ccc: "#ccc",
	GREY_eee: "#eee",
	GREY_252525: "#252525",
	GREY_ddd: "#ddd",
	BG_GREY: "#f4f4f5",
	GREY_e3: "#e3e3e3",
	GREY_5a: "#5a5a5a",
	LIST_BOTTOM: "#CED1D6",
	DIVIDER: "#dddddd",
	DEEP_RED: "#DA1E46",
	BG_COLOR: "#f4f4f5",
	BORDER_COLOR: "#DDDDDD",
	TINT_RED: "#d93356",
	BG_GREYF9: "#f9f8f8",
	GRADIENT_START: "#fcfcfb",
	GRADIENT_END: "#e9eaee"
};
export const SCREEN_WIDTH = Dimensions.get("window").width;
//export const SCREEN_WIDTH = 375;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const SMALL_SCREEN = SCREEN_WIDTH < 350 ? true : false;
//size for different screen
export const BORDER_TOP_WIDTH = Platform.OS === "android" ? 0.5 : (SCREEN_WIDTH < 375 ? 0.5 : 1);
//-------中文描述------//
export const CN_CONSULTANT = "销售顾问";
export const CN_SHOWROOM_MANAGER = "展厅经理";
export const CN_TEST_DRIVER = "试驾专员";
export const CN_DIGITAL_MARKETING_MANAGER = "数字化营销经理";
export const CN_RECEPTIONIST = "前台接待";
//CSCCHERY-831:标签合并
export const CN_NEWINVITE = "邀约"; // 邀约 邀约到店
export const CN_INVITE_NEW = "邀约"; // 邀约 邀约到店
export const CN_ORDERDRIVE_NEW = "邀约"; //邀约 预约试驾
export const CN_UNKNOW_NEW = "无明确意向"; //邀约 未明确意向
export const CN_ORDERDRIVE = "预约试驾";
export const CN_INVITE = "邀约到店";
export const CN_ORDERPLACED = "下订";
export const CN_TESTDRIVE = "试驾";
export const CN_KNOCKDOWN = "成交";
export const CN_DEFEAT = "申请战败";
export const CN_RETURNVISIT = "交车回访";
export const CN_UNSUBSCRIBE = "退订";
export const CN_RETURNEDGOODS = "退货";
export const CN_INVIALD = "失效";
export const CN_DEFEATAPPOVED = "战败申请通过";
export const CN_DEFEATREJECTED = "战败申请驳回";
export const CN_UNSUBSCRIBEAPPOVED = "退订申请通过";
export const CN_UNSUBSCRIBEREJECTED = "退订申请驳回";
export const CN_RETURNEDGOODSAPPOVED = "退货申请通过";
export const CN_RETURNEDGOODSREJECTED = "退货申请驳回";
export const CN_GENDER = "性别";
export const CN_INTENTCARMODEL = "车型";
export const CN_INTENTCARCOLOR = "颜色";
export const CN_INTENTCARFUCOS = "购车关注点";
export const CN_INTENTCARUSE = "购车用途";
export const CN_INTENTCARTYPE = "购买类型";
export const CN_INTENTCARLEVEL = "意向级别";
export const CN_INTENTLEVEL = "意向级别";
export const CN_CAMPAIGN = "活动";
export const CN_LEAD_SOURCE_LEAVEL_ONE = "线索来源一级";
export const CN_LEAD_SOURCE_LEAVEL_TWO = "线索来源二级";
export const CN_INPUT_MOBILE_NUMBER = "填写手机号";
export const CN_PLEASE_SELECT = "请选择";
export const CN_LOGIN = "登录";
export const CN_TEST_LOGIN = "奇瑞测试系统登录";
export const CN_DEV_LOGIN = "奇瑞开发系统登录";
export const CN_LOGIN_TITLE = "立即登录";
export const CN_INPUT_PLACEHOLDER = "请输入";
export const CN_LOGOUT = "退出登录";
export const CN_LEAD_CREATED_SUCC = "线索创建成功！";
export const CN_LEAD_CREATED_FAILED = "线索创建失败！";
export const CN_LEAD_CREATED_FLLOW_BY_OTHERS = "该手机号码客户已由本店其他销售顾问跟进";
export const CN_ORDERED_DRIVE_STATUS = "已预约";
export const CN_PENDING_DRIVE_STATUS = "待试驾";
export const CN_TEST_DRIVED_STATUS = "已试驾";
export const CN_RESET_PWD = "修改密码";
export const CN_SUBMIT_RESET_PWD = "提交修改";
export const CN_RESET_PWD_SUCC = "密码修改成功，请重新登录";
export const CN_RETRIEVE_PWD_SUCC = "密码重置成功，请重新登录";
export const CN_RESET_PWD_FAILED = "密码修改失败";
export const CN_RESET_PWD_FAILED_SAME_WITH_PRE = "旧密码不正确";
export const CN_RESET_PWD_FORMAT_MSG = "格式错误，请重新输入";
export const CN_RESET_PWD_LENGTH_MSG = "密码长度必须为8位或者以上";
export const CN_RESET_PWD_SAME_WITH_OLD_MSG = "新密码不能与原密码相同";
export const CN_RESET_PWD_NEW_NOT_SAME_MSG = "两次密码输入不一致";
export const PASSWORD_RULES = "密码为8位到255位的字符，可以包含大写字母、小写字母、数字或非空特殊字符，且至少含有大写字母、小写字母、数字、特殊字符中的三类字符。";
export const CN_LOGON_WRONG_UN_PWD_MSG = "用户名或密码不正确";

export const LOGIN_ERROR_AUTHENTICATION_NOT_AUTHORIZED = "认证失败，请重新登录";
export const LOGIN_ERROR_AUTHENTICATION_FORBIDDEN = "权限错误，请联系管理员";
export const LOGIN_ERROR_AUTHENTICATION_BAD_CREDENTIALS = "认证失败，请检查用户名和密码";
export const LOGIN_ERROR_SESSION_INVALID = "会话过期，请重新登录";
export const LOGIN_VALID_CODE_SESSION_INVALID = "验证码已失效，请重新获取";
export const LOGIN_ERROR_SESSION_EXPIRED = "该账号已在别处登录，请重新登录";
export const LOGIN_ERROR_SMS_CODE_ERROR = "电话号码或验证码错误，请检查输入的电话号码和验证码";
export const MOBILE_NOT_FOUND = "请确保手机号码正确，或联系信息员在PC端创建帐号"; //电话号码不存在
export const ERROR_FOR_READ_LOGIN_INFO = "读取登录信息错误，请联系管理员";

// error
export const UNKNOW_ERROR_CODE = "UNKNOW_ERROR_CODE";
export const NETWORK_FAILED = "网络不给力，请切换联网方式";
export const NETWORK_TIMEOUT = "网络连接超时";
export const UNKNOW_ERROR = "无法解析的问题,请联系管理员";

export const CN_NO_INTENTION_PURCHASE_DATE = "无明确时间";
export const CN_ALL_CAR_MODEL = "全部车型";
export const CAR_TYPE = "车型";
export const CATEGORY = "品种";
export const DONGZON = "动总";
//-------中文描述------//
//-------Code Key-----//
export const CODE_CONSULTANT = "ROLE_SALE_CONSULTANT";
export const CODE_SHOWROOM_MANAGER = "ROLE_SHOWROOM_MANAGER";
export const CODE_TEST_DRIVER = "ROLE_TEST_DRIVER";
export const CODE_DIGITAL_MARKETING_MANAGER = "ROLE_DIGITAL_MARKETING_MANAGER";
export const CODE_RECEPTIONIST = "ROLE_RECEPTIONIST";

//CSCCHERY-831:标签合并
export const CODE_ACTIVITY_PURPOSE_NEWINVITE = "NEWINVITE";
export const CODE_ACTIVITY_PURPOSE_ORDERDRIVE_NEW = "ORDERDRIVE_NEW";
export const CODE_ACTIVITY_PURPOSE_INVITE_NEW = "INVITE_NEW";
export const CODE_ACTIVITY_PURPOSE_NOTSURE = "NOTSURE";
export const CODE_ACTIVITY_PURPOSE_ORDERDRIVE = "ORDERDRIVE";
export const CODE_ACTIVITY_PURPOSE_INVITE = "INVITE";
export const CODE_ACTIVITY_PURPOSE_ORDERPLACED = "ORDERPLACED";
export const CODE_ACTIVITY_PURPOSE_TESTDRIVE = "TESTDRIVE";
export const CODE_ACTIVITY_PURPOSE_KNOCKDOWN = "KNOCKDOWN";
export const CODE_ACTIVITY_PURPOSE_DEFEAT = "DEFEAT";
export const CODE_ACTIVITY_PURPOSE_RETURNVISIT = "RETURNVISIT";
export const CODE_ACTIVITY_PURPOSE_UNSUBSCRIBE = "UNSUBSCRIBE";
export const CODE_ACTIVITY_PURPOSE_RETURNEDGOODS = "RETURNEDGOODS";
export const CODE_ACTIVITY_PURPOSE_DEFEATAPPOVED = "DEFEATAPPOVED";
export const CODE_ACTIVITY_PURPOSE_DEFEATREJECTED = "DEFEATREJECTED";
export const CODE_ACTIVITY_PURPOSE_UNSUBSCRIBEAPPOVED = "UNSUBSCRIBEAPPOVED";
export const CODE_ACTIVITY_PURPOSE_UNSUBSCRIBEREJECTED = "UNSUBSCRIBEREJECTED";
export const CODE_ACTIVITY_PURPOSE_RETURNEDGOODSAPPOVED = "RETURNEDGOODSAPPOVED";
export const CODE_ACTIVITY_PURPOSE_RETURNEDGOODSREJECTED = "RETURNEDGOODSREJECTED";
export const CODE_ACTIVITY_PURPOSE_INVIALD = "INVIALD"; //失效
export const CODE_ACTIVITY_GROUPCODE_LOCAL = "Z001";
export const CODE_ACTIVITY_GROUPCODE_CALL = "Z002";
export const CODE_ACTIVITY_GROUPCODE_SMS = "Z003";
export const CODE_ACTIVITY_GROUPCODE_WECHAT = "Z004";
export const CODE_ACTIVITY_GROUPCODE_SYSTEM = "Z005";

//-------Code Key-----//
/*--------metadata URL-------*/
export const METADTA_GENDER_URL = C4C_ODATA_V1 + "/c4codata/LeanLeadGenderCollection?$format=json";
export const METADTA_LEADACTIVITY_INTENTIONLEVEL_URL = C4C_HOST + "/cust/v1/activity/ActivityIntentionLevelCollection";
export const METADTA_LEADACTIVITY_REASON1_URL = C4C_HOST + "/cust/v1/activity/ActivityReason1contentCollection?$filter=Code eq 'Z*'";
export const METADTA_LEADACTIVITY_REASON2_URL = C4C_HOST + "/cust/v1/activity/ActivityReasonList2contentCollection";
export const METADTA_LEADACTIVITY_OCRIDTYPE_URL = C4C_HOST + "/cust/v1/activity/ActivityOCRIDTypeCollection"; //CSCHERY-1678:增加请求证件类型的metedata url
export const ACTIVITYTESTCAR_URL = SCP_HOST_URL + "/api/v1/testDriveCarProfiles";
//修改数据源API
export const COUNT_CARTYPE_URL = C4C_HOST + "/cust/v1/productcategory/ProductCategoryHierarchyProductCategoryCollection/$count?&$filter= ProductAssignmentAllowedIndicator eq true "; // 先Count一下车型有多少条数据，解决因车型数据超过1000条而取不全的问题
export const CARTYPE_URL = C4C_HOST + "/cust/v1/productcategory/ProductCategoryHierarchyProductCategoryCollection?$format=json&$filter= ProductAssignmentAllowedIndicator eq true &$orderby=Description desc&$top=";
//增加API取可授权的车型
export const SOLD_CAR_URL = C4C_HOST + "/cust/v1/dealersalesauthorization/BO_DealerDealerSalesAuthorizationCollection?$filter=IsValidCarModel eq true ";
export const METADTA_LEAD_LEVELS_ENUM_URL = C4C_ODATA_V1 + "/c4codata/LeanLeadLeadLevelCollection?$format=json";
export const METADTA_LEAD_PURPOSE_ENUM_URL = C4C_ODATA_V1 + "/c4codata/LeanLeadGroupCodeCollection?$format=json";
export const METADTA_LEAD_PURCHASE_TYPE_ENUM_URL = C4C_ODATA_V1 + "/c4codata/LeanLeadBuyMethod2Collection?$format=json";
export const METADTA_LEAD_PURCHASE_FOCUS_ENUM_URL = C4C_ODATA_V1 + "/c4codata/LeanLeadMainPurchaseFocuscontentCollection?$format=json";
export const METADTA_LEAD_CARMODE_COLOR = C4C_HOST + "/cust/v1/color/ColorCollection?$format=json";
/*--------metadata URL-------*/
/* activity related api in role consultant */

export const CAMPAIGN_LIST_API = SCP_HOST_URL + "/api/v1/campaigns/pages";
export const LEAD_CREATION_MOBILE_CHECK_URL = C4C_ODATA + "/customerphone/PhoneCollection?$format=json&$expand=Customer&$filter=StatusCode eq '1' and PhoneNumber eq ";
export const LEAD_CREATION_LEAD_URL = C4C_LEAN_LEAD_COLLECTION + "?$format=json&$filter=Mobile eq ";
export const LEAD_CREATION_URL = C4C_LEAN_LEAD_COLLECTION;

export const LEAD_SOURCE_ONE_ENUM_URL = C4C_ODATA + "/leadsource/LeadSourceRootCollection?$format=json&$filter=LeadOriginalTypeCode eq 'Z2'";
export const LEAD_SOURCE_TWO_ENUM_URL = C4C_ODATA + "/leadsource/SecondLeadSourceCollection?$format=json&$filter=ToFirstLevelID eq ";
export const ALL_CAMPAIN_LIST_API = C4C_ODATA + "/campaign2/Campaign2Collection?$format=json&$filter=LifeCycleStatusCode eq '2'";

export const LEADACTIVITY_URL = C4C_HOST + "/cust/v1/activity/ActivityCollection";

/* drive related API in role test driver */

// Will switch to SCP host once the SCP destination is ready
// export const TEST_DRIVE_URL = C4C_HOST + "/cust/v1/activity/ActivityCollection?$format=json&$select=ActivityID,SalesRepID,LeadIDcontent,VehicleModeID,VehicleModel,AppointmentDate,TestDrivenStatus,DriverID,CreationDate,NextActivityTime,CustomerName,SalesRepName,ObjectID,IntentModel,Purpose&$filter=Purpose eq '*TESTDRIVE*' and TestDrivenStatus eq '01' and DriverID eq ";
// export const ORDER_TEST_DRIVE_URL = C4C_HOST + "/cust/v1/activity/ActivityCollection?$format=json&$select=ActivityID,SalesRepID,LeadIDcontent,VehicleModeID,VehicleModel,AppointmentDate,TestDrivenStatus,DriverID,CreationDate,NextActivityTime,CustomerName,SalesRepName,ObjectID,IntentModel,Purpose&$filter=Purpose eq '*ORDERDRIVE*' and DriverID eq ";
// export const TEST_DRIVE_URL = C4C_HOST + "/cust/v1/activity/ActivityCollection?$format=json&$filter=Purpose eq '*TESTDRIVE*' and TestDrivenStatus eq '01' and DriverID eq ";
export const TEST_DRIVE_URL = C4C_HOST + "/cust/v1/activity/ActivityCollection?$format=json&$filter=Purpose eq '*TESTDRIVE*' and DriverID eq ";
export const ORDER_TEST_DRIVE_URL = C4C_HOST + "/cust/v1/activity/ActivityCollection?$format=json&$filter=Purpose eq '*ORDERDRIVE*' and TestDrivenStatus eq '' and DriverID eq ";

export const LEADITEM_BASE_URL = C4C_LEAN_LEAD_COLLECTION + "?$format=json&$select=FullName,IntentionCarName,IntentionColor,FirstTouch,CreationDateTime,LeadLevel,LeadLevelText,APPTaskType";

/* mobile app release version*/
export const CN_VERSION = "版本 " + GlobalVariable.app.versionType;
export const CN_RELEASE_VERSION_ANDROID = GlobalVariable.app.appVersion;
export const CN_RELEASE_VERSION_IOS = GlobalVariable.app.appVersion;

export const USER_STATUS_CODE_TEXT_ORDER = ["新建", "待分配", "已分配", "已跟进", "已到店", "已试驾", "已下订", "战败/流失", "已成交"];
export const LEAD_LEVEL_TEXT_ORDER = ["H", "A", "B", "C", "O"];

//CSCCHERY-1748：
//枚举出各个跟进上需要赋值（传递）的字段，进而区分出不同的跟进，防止选中标签取消后无法真正的取消
//**重要**：后续对跟进字段的修改时需手动在此处添加
//预约试驾  -- 对应字段：
//AppointmentDate：预约试驾时间  VehicleModel：试驾车型  VehicleModeID：  CampaignName：活动  CampaignID：活动对应的ID  IntentionLevelText：意向级别 IntentionLevel：意向级别Code  IntentModel:意向车型  IntentModeID：意向车型ID   NextActivityTime：下次跟进时间 CustomerResponse：客户反馈 DriverID:试驾员ID CustomerName:客户姓名 Purpose:跟进小类（可能无用但是不影响功能） ApprovalNotes2:审批信息字段（可能无用但是不影响功能）FromLeadSource1ID:线索来源一级,FromLeadSource2ID:线索来源二级,CampaignCounterType:活动统计结果
export const ORDERDRIVE_FIELDNAME = "GroupCode, AppointmentDate,VehicleModel,VehicleModeID,CampaignName,CampaignID,IntentionLevelText,IntentionLevel,IntentModel,IntentModeID,NextActivityTime,CustomerResponse,DriverID,CustomerName,Purpose,ApprovalNotes2,FromLeadSource1ID,FromLeadSource2ID,CampaignCounterType";
//邀约到店  -- 对应字段：
//ArrivalTime:下次到店时间  CampaignName：活动  CampaignID：活动对应的ID  IntentionLevelText：意向级别 IntentionLevel：意向级别Code  IntentModel:意向车型 IntentModeID：意向车型ID   NextActivityTime：下次跟进时间 CustomerResponse：客户反馈 CustomerName:客户姓名（可能无用但是不影响功能） Purpose:跟进小类（可能无用但是不影响功能） ApprovalNotes2:审批信息字段（可能无用但是不影响功能）FromLeadSource1ID:线索来源一级,FromLeadSource2ID:线索来源二级,CampaignCounterType:活动统计结果
export const INVITE_FIELDNAME = "GroupCode, ArrivalTime,CampaignName,CampaignID,IntentionLevelText,IntentionLevel,IntentModel,IntentModeID,NextActivityTime,CustomerResponse,CustomerName,Purpose,ApprovalNotes2,FromLeadSource1ID,FromLeadSource2ID,CampaignCounterType";
//下定  -- 对应字段：
//QuoteAmount_content:下订金额  CampaignName：活动  CampaignID：活动对应的ID  IntentionLevelText：意向级别 IntentionLevel：意向级别Code  IntentModel:意向车型 IntentModeID：意向车型ID  NextActivityTime：下次跟进时间 CustomerResponse：客户反馈 CustomerName:客户姓名（可能无用但是不影响功能） Purpose:跟进小类（可能无用但是不影响功能） ApprovalNotes2:审批信息字段（可能无用但是不影响功能）FromLeadSource1ID:线索来源一级,FromLeadSource2ID:线索来源二级,CampaignCounterType:活动统计结果
export const ORDERPLACED_FIELDNAME = "GroupCode, QuoteAmount_content,CampaignName,CampaignID,IntentionLevelText,IntentionLevel,IntentModel,IntentModeID,NextActivityTime,CustomerResponse,CustomerName,Purpose,ApprovalNotes2,FromLeadSource1ID,FromLeadSource2ID,CampaignCounterType,IntentionColorID2,IntentionColor2";
//试驾  -- 对应字段：
//VehicleModel：试驾车型  VehicleModeID： DriverID： IsCustomerOwn：是否本人试驾 IsDLScanned：驾照是否已扫描 IsIDCScanned：身份证是否已扫描 1609:去除OtherVehicleModel：试驾超过一辆车型  1609:去除OtherVehicleModelID: CampaignName：活动  CampaignID：活动对应的ID  IntentionLevelText：意向级别 IntentionLevel：意向级别Code  IntentModel:意向车型 IntentModeID：  NextActivityTime：下次跟进时间 CustomerResponse：客户反馈
//OCRCustomerName: 姓名/购方名称  OCRID:身份证号码/证件号码 OCRBirthDate：出生日期  OCRGender：性别Code OCRGenderText:性别文本值 OCRGender:性别文本值 IDAddress：住址 OCRCountryText：国籍文本值 OCRCountry：国籍Code  OCRApplicationDate:领证日期  OCRDriveCarCategory:准驾车型  OCRStartDate:起始日期 OCRDuration:有效期限 CustomerName:客户姓名（可能无用但是不影响功能） Purpose:跟进小类（可能无用但是不影响功能） ApprovalNotes2:审批信息字段（可能无用但是不影响功能）FromLeadSource1ID:线索来源一级,FromLeadSource2ID:线索来源二级,CampaignCounterType:活动统计结果
export const TESTDRIVE_FIELDNAME = "GroupCode, VehicleModel,VehicleModeID,DriverID,IsCustomerOwn,IsDLScanned,IsIDCScanned,CampaignName,CampaignID,IntentionLevelText,IntentionLevel,IntentModel,IntentModeID,NextActivityTime,CustomerResponse,OCRCustomerName,OCRID,OCRBirthDate,OCRGender,OCRGenderText,OCRGender,IDAddress,OCRCountryText,OCRCountry,OCRApplicationDate,OCRDriveCarCategory,OCRStartDate,OCRDuration,CustomerName,Purpose,ApprovalNotes2,FromLeadSource1ID,FromLeadSource2ID,CampaignCounterType";
//成交  -- 对应字段：
// CampaignName：活动  CampaignID：活动对应的ID OCRIDType：证件类型 CustomerResponse：客户反馈 CustomerPhone：手机号码 OCRID：证件号码 OCRCustomerName: 姓名/购方名称 OCRInvoiceCodeID：发票代码 OCRInvoiceNumber：发票号码 OCRInvoiceDate：开票日期 OCRInvoiceCar：厂牌型号 OCRInvoiceAmountWithTaxcontent：价税合计小写 OCRInvoiceAmountcontent：不含税价 Purpose:跟进小类（可能无用但是不影响功能） ApprovalNotes2:审批信息字段（可能无用但是不影响功能）FromLeadSource1ID:线索来源一级,FromLeadSource2ID:线索来源二级,CampaignCounterType:活动统计结果
// OCRProofCertificateID：合格证号 OCREngineCode：发动机号码  OCRVINCode：车架号 OCRInvoiceCarCategory：成交车型 OCRInvoiceCarID2：成交车型ID ProducerAddress：产地 IsRecepitScanned:发票是否已扫描字段 CustomerName:客户姓名（可能无用但是不影响功能）, InvoiceURL发票的URL,OCRCarNumber:延期理由
export const KNOCKDOWN_FIELDNAME = "GroupCode, CampaignName,OCRIDType,CampaignID,CustomerResponse,CustomerPhone,OCRID,OCRCustomerName,OCRInvoiceCodeID,OCRInvoiceNumber,OCRInvoiceDate,OCRInvoiceCar,OCRInvoiceAmountWithTaxcontent,OCRInvoiceAmountcontent,OCRProofCertificateID,OCREngineCode,OCRVINCode,OCRInvoiceCarCategory,OCRInvoiceCarID2,ProducerAddress,IsRecepitScanned,CustomerName,Purpose,ApprovalNotes2,InvoiceURL,OCRCarNumber,FromLeadSource1ID,FromLeadSource2ID,CampaignCounterType";
//申请战败  -- 对应字段：
//Reason1contentText：战败类别文本值  Reason1content：战败类别 Reason2Text：战败/流失原因二类 Reason2contentText：战败/流失原因二类文本值 LoseProduct：战败车型 Reason2Text;战败原因 IntentModel:意向车型 IntentModeID：意向车型ID IntentionLevelText：意向级别 IntentionLevel：意向级别Code CustomerResponse：客户反馈 CustomerName:客户姓名（可能无用但是不影响功能） Purpose:跟进小类（可能无用但是不影响功能） ApprovalNotes2:审批信息字段（可能无用但是不影响功能）
export const DEFEAT_FIELDNAME = "GroupCode, Reason1contentText,Reason1content,Reason2Text,LoseProduct,Reason2contentText,Reason2content,IntentModel,IntentModeID,IntentionLevelText,IntentionLevel,CustomerResponse,CustomerName,Purpose,ApprovalNotes2";
//退订  -- 对应字段：
//Reason1contentText：战败类别文本值  Reason1content：战败类别 Reason2Text：战败/流失原因二类 Reason2contentText：战败/流失原因二类文本值 LoseProduct：战败车型 Reason2Text;战败原因 IntentModel:意向车型 IntentModeID：意向车型ID IntentionLevelText：意向级别 IntentionLevel：意向级别Code CustomerResponse：客户反馈 CustomerName:客户姓名（可能无用但是不影响功能） Purpose:跟进小类（可能无用但是不影响功能） ApprovalNotes2:审批信息字段（可能无用但是不影响功能）
export const UNSUBSCRIBE_FIELDNAME = "GroupCode, Reason1contentText,Reason1content,Reason2Text,LoseProduct,Reason2contentText,Reason2content,IntentModel,IntentModeID,IntentionLevelText,IntentionLevel,CustomerResponse,CustomerName,Purpose,ApprovalNotes2";
//退货  -- 对应字段：
//Reason1contentText：战败类别文本值  Reason1content：战败类别 Reason2Text：战败/流失原因二类 Reason2contentText：战败/流失原因二类文本值 LoseProduct：战败车型 Reason2Text;战败原因 IntentModel:意向车型 IntentModeID：意向车型ID IntentionLevelText：意向级别 IntentionLevel：意向级别Code CustomerResponse：客户反馈 CustomerName:客户姓名（可能无用但是不影响功能） Purpose:跟进小类（可能无用但是不影响功能） ApprovalNotes2:审批信息字段（可能无用但是不影响功能）
export const RETURNEDGOODS_FIELDNAME = "GroupCode, Reason1contentText,Reason1content,Reason2Text,LoseProduct,Reason2contentText,Reason2content,IntentModel,IntentModeID,IntentionLevelText,IntentionLevel,CustomerResponse,CustomerName,Purpose,ApprovalNotes2";
//失效  -- 对应字段：
export const INVIALD_FIELDNAME = "GroupCode,Purpose,ApprovalNotes2";

export const RETURNVISIT_FIELDNAME = "GroupCode, CustomerResponsePurpose,Purpose,ApprovalNotes2";
//未明确意向（一个APP端的hard code）  -- 对应字段：
export const NOTSURE_FIELDNAME = "GroupCode,IntentionLevelText,CampaignName,CampaignID,IntentionLevel,IntentModel,IntentModeID,NextActivityTime,CustomerResponse,CustomerName,Purpose,ApprovalNotes2,FromLeadSource1ID,FromLeadSource2ID,CampaignCounterType";

export const LEAD_ORIGIN = {
	ONLINE: "Z1", // 线上线索
	OFFLINE: "Z2" // 线下线索
};
export const SCP_REFRESH_MANAGER_REPORT_URL = SCP_HOST_URL + "/api/v1/report/backupManager/";
export const SCP_REFRESH_SALES_REPORT_URL = SCP_HOST_URL + "/api/v1/report/backupSales/";

 // 报表1 - 表格报表
export const INITIAL_MAP_REPORT_CHART = {
	"VALID": {
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyRate": 0,
		"retainRate": 0
	},
	"Z1": {
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyRate": 0,
		"retainRate": 0
	},
	"Z2": {
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyRate": 0,
		"retainRate": 0
	},
	"Z8": {
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyRate": 0,
		"retainRate": 0
	},
	"Z9": {
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyRate": 0,
		"retainRate": 0
	},
	"ZA": {
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyRate": 0,
		"retainRate": 0
	}
};

// 漏斗报表（整个）
export const INITIAL_TRAPEZOID_CHART = [
	{
		"label": "C级",
		"key": "C",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"count": 0
	},
	{
		"label": "B级",
		"key": "B",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"count": 0
	},
	{
		"label": "A级",
		"key": "A",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"count": 0
	},
	{
		"label": "H级",
		"key": "H",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"count": 0
	},
	{
		"label": "O级",
		"key": "O",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"count": 0
	}
];
// 转化能力报表
export const INITIAL_CONVERSION_CHART = [
	{
		"label": "C级",
		"key": "C",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyConversionRate": 0,
		"retainConversionRate": 0
	},
	{
		"label": "B级",
		"key": "B",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyConversionRate": 0,
		"retainConversionRate": 0
	},
	{
		"label": "A级",
		"key": "A",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyConversionRate": 0,
		"retainConversionRate": 0
	},
	{
		"label": "H级",
		"key": "H",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyConversionRate": 0,
		"retainConversionRate": 0
	},
	{
		"label": "O级",
		"key": "O",
		"monthlyNumber": 0,
		"retainNumber": 0,
		"monthlyConversionRate": 0,
		"retainConversionRate": 0
	},
];

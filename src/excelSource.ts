/* eslint-disable max-lines */
type FileItem = {
  id: number // מזהה ייחודי אקראי בן 5 ספרות (10000–99999)
  fileName: string // שם קובץ
  category: string // קטגוריה
  subCategory: string // תת קטגוריה
  informationType: string // סוג מידע
  language: string // שפה
  isPublish: boolean
  status: string
};

export const files: FileItem[] = [
  {
    id: 71381,
    fileName: "העתק אור עקיבא",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 49732,
    fileName: "מיפוי העתקים בברניקי",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 84050,
    fileName: "עדכון מעמד העתקים 2018",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 71043,
    fileName: "עדכון מעמד העתקים 2022",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 28924,
    fileName: "פעילות טקטונית כרמל ונשר",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 85806,
    fileName: "רכס חוסם צפוני בכרמל",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 84518,
    fileName: "קריעת פני שטח בטבריה",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 43221,
    fileName: "העתק אחיהוד",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 54062,
    fileName: "מיקום העתק הכרמל מניתוח תתקרקע",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 20531,
    fileName: "מדידות רעש לאיתור העתק הכרמל",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 28385,
    fileName: "מפת סיכון ארצית להעתקה פעילה",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 86975,
    fileName: "העתקים פעילים אילת",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 43725,
    fileName: "מבנה תלת מימדי למפרץ אילת",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 51378,
    fileName: "זמני חזרה של רעידות בכנרת",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 28515,
    fileName: "העתקים במדרון היבשת וטקטוניקת מלח",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 33624,
    fileName: "אפיון העתקים במדרון היבשת",
    category: "גיאולוגיה",
    subCategory: "העתקים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 44497,
    fileName: "הגברת תנודות בעמק זבולון א",
    category: "גיאולוגיה",
    subCategory: "הגברת חריגה",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 73230,
    fileName: "הגברת תנודות בשפלה",
    category: "גיאולוגיה",
    subCategory: "הגברת חריגה",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 38837,
    fileName: "הגברת תנודות בעמק זבולון ב",
    category: "גיאולוגיה",
    subCategory: "הגברת חריגה",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 44504,
    fileName: "היחס בין שטח וגודל גלישות",
    category: "גיאולוגיה",
    subCategory: "גלישת קרקע",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 47412,
    fileName: "גלישות אזור אילת אילות",
    category: "גיאולוגיה",
    subCategory: "גלישת קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 63280,
    fileName: "גלישות באזור בית שאן",
    category: "גיאולוגיה",
    subCategory: "גלישת קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 93247,
    fileName: "סיכון נפילת סלעים חפציבה",
    category: "גיאולוגיה",
    subCategory: "גלישת קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 47576,
    fileName: "טיפוסי כשל מדרון בחיפה",
    category: "גיאולוגיה",
    subCategory: "גלישת קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 71124,
    fileName: "מפת סכנה ארצית לגלישות צפון",
    category: "גיאולוגיה",
    subCategory: "גלישת קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 60785,
    fileName: "מפת סכנה ארצית לגלישות דרום",
    category: "גיאולוגיה",
    subCategory: "גלישת קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 18944,
    fileName: "גלישות תת ימיות במדרון היבשת",
    category: "גיאולוגיה",
    subCategory: "גלישת קרקע",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 30862,
    fileName: "אלגוריתם לחיזוי גלישת קרקע",
    category: "גיאולוגיה",
    subCategory: "גלישת קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 77482,
    fileName: "התנזלות בבית שאן",
    category: "גיאולוגיה",
    subCategory: "התנזלות קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 32438,
    fileName: "התנזלות בעמק זבולון",
    category: "גיאולוגיה",
    subCategory: "התנזלות קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 15452,
    fileName: "התנזלות אילת אילות",
    category: "גיאולוגיה",
    subCategory: "התנזלות קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 29079,
    fileName: "הערכה גיאוטכנית להתנזלות בזבולון",
    category: "גיאולוגיה",
    subCategory: "התנזלות קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 47840,
    fileName: "הערכת מיקום ועוצמה מלווינים",
    category: "גיאולוגיה",
    subCategory: "עוצמת רעידה",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 34429,
    fileName: "שאלון עדכני לקביעת עוצמות סייסמיות",
    category: "גיאולוגיה",
    subCategory: "עוצמת רעידה",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 30047,
    fileName: "אימוץ סולם עוצמה אירופאי",
    category: "גיאולוגיה",
    subCategory: "עוצמת רעידה",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 87285,
    fileName: "סימולציה לצונמי בים המלח",
    category: "גיאולוגיה",
    subCategory: "סיכון לצונמי",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 64444,
    fileName: "מודל סיכון לצונמי בת גלים ואילת",
    category: "גיאולוגיה",
    subCategory: "סיכון לצונמי",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 57478,
    fileName: "הדמיית תרחישי צונמי",
    category: "גיאולוגיה",
    subCategory: "סיכון לצונמי",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 71996,
    fileName: "סף מגניטודה לצונמי",
    category: "גיאולוגיה",
    subCategory: "סיכון לצונמי",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 71977,
    fileName: "פגיעת צונמי בתשתיות ימיות",
    category: "גיאולוגיה",
    subCategory: "סיכון לצונמי",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 17214,
    fileName: "ניתוח היסטורי סכנה לצונמי",
    category: "גיאולוגיה",
    subCategory: "סיכון לצונמי",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 30476,
    fileName: "סיכום סיכונים בחיפה",
    category: "גיאולוגיה",
    subCategory: "סיכונים סייסמיים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 31251,
    fileName: "סיכונים והעתקים בבקעת הירדן",
    category: "גיאולוגיה",
    subCategory: "סיכונים סייסמיים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 52391,
    fileName: "מיפוי סיכונים אזור מתלול צורים",
    category: "גיאולוגיה",
    subCategory: "סיכונים סייסמיים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 79389,
    fileName: "בסיס נתונים גאודטי עבור הדרום",
    category: "גיאולוגיה",
    subCategory: "סיכונים סייסמיים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 66857,
    fileName: "מיפוי סיכונים והעתקים בבית שאן",
    category: "גיאולוגיה",
    subCategory: "סיכונים סייסמיים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 46514,
    fileName: "הסיכון לרעידת אדמה בטבריה",
    category: "גיאולוגיה",
    subCategory: "סיכונים סייסמיים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 13579,
    fileName: "תכנת ורוניק",
    category: "גיאולוגיה",
    subCategory: "סיכונים סייסמיים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 68266,
    fileName: "אפיון תופעות סביבה מרעידות",
    category: "גיאולוגיה",
    subCategory: "סיכונים סייסמיים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 44293,
    fileName: "תפיסה לאומית לרעידת אדמה",
    category: "ועדת ההיגוי",
    subCategory: "תוכניות ותפיסות לאומיות",
    informationType: "תוכניות",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 51490,
    fileName: "פוסטר הנחיות במשטרה",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 14328,
    fileName: "פוסטר הנחיות בבתי חולים",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 41626,
    fileName: "עלון היערכות לרעידות אדמה רוסית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "russian",
    isPublish: false,
    status: "init"
  },
  {
    id: 49563,
    fileName: "עלון היערכות לרעידות אדמה ערבית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "arabic",
    isPublish: false,
    status: "init"
  },
  {
    id: 52536,
    fileName: "עלון היערכות לרעידות אדמה אנגלית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 45444,
    fileName: "עלון היערכות לרעידות אדמה עברית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 80743,
    fileName: "הנחיות ברעידת אדמה עברית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 71214,
    fileName: "הנחיות ברעידת אדמה ערבית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "arabic",
    isPublish: false,
    status: "init"
  },
  {
    id: 53736,
    fileName: "הנחיות ברעידת אדמה רוסית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "russian",
    isPublish: false,
    status: "init"
  },
  {
    id: 29684,
    fileName: "הנחיות ברעידת אדמה אנגלית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 75622,
    fileName: "מצגת הסברה",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 70638,
    fileName: "כרזה בערבית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "arabic",
    isPublish: false,
    status: "init"
  },
  {
    id: 92552,
    fileName: "כרזה בעברית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 65565,
    fileName: "מדריך לתכנון מילוט במבני ציבור",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 79011,
    fileName: "עלון צונמי ערבית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "arabic",
    isPublish: false,
    status: "init"
  },
  {
    id: 86885,
    fileName: "עלון צונמי אנגלית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 57298,
    fileName: "עלון צונמי עברית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "עלוני הסברה",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 97248,
    fileName: "ועדה לבחינת הנחיות במוסדות חינוך",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "דוחות",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 47010,
    fileName: "הנחיות לאנשים עם מוגבלות - מוסדות",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "דוחות",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 37556,
    fileName: "היערכות אנשים עם מוגבלות ערבית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "מדריכים",
    language: "arabic",
    isPublish: false,
    status: "init"
  },
  {
    id: 68111,
    fileName: "היערכות אנשים עם מוגבלות עברית",
    category: "ועדת ההיגוי",
    subCategory: "הנחיות ברעידת אדמה",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 22576,
    fileName: "אתר סיוע לאוכלוסיה",
    category: "היערכות הרשות המקומית",
    subCategory: "אתר סיוע לאוכלוסייה",
    informationType: "תוכניות",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 15928,
    fileName: "השוואת שיטות חישוב תגובת אתר",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 16416,
    fileName: "מדידות תגובת אתר אזור גלילות",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 28546,
    fileName: "תגובת אתר אזור באר שבע",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 30456,
    fileName: "תגובת אתר באר שבע",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 26894,
    fileName: "תגובת אתר דימונה",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 82139,
    fileName: "תגובת אתר שדה דב",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 51746,
    fileName: "תגובת אתר רחובות",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 74519,
    fileName: "תגובת אתר קרית גת",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 43031,
    fileName: "תגובת אתר קריות חיפה",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 53266,
    fileName: "תגובת אתר צור יצחק",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 98228,
    fileName: "תגובת אתר עראבה",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 59734,
    fileName: "תגובת אתר עמק זבולון",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 87664,
    fileName: "תגובת אתר נורדיה",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 47158,
    fileName: "תגובת אתר מגדל העמק",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 74423,
    fileName: "תגובת אתר ירוחם",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 80980,
    fileName: "תגובת אתר ומיקרוזונציה אילת",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 25990,
    fileName: "תגובת אתר גלילות",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 61312,
    fileName: "תגובת אתר גדידה מכר",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 61669,
    fileName: "תגובת אתר בעיר טבריה",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 18079,
    fileName: "תגובת אתר אשקלון",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 86901,
    fileName: "מדידות תגובת אתר אזור דימונה",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 87745,
    fileName: "תגובת אתר אכסאל",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 71571,
    fileName: "אופן חישוב תגובת אתר",
    category: "סיסמולוגיה",
    subCategory: "תגובת אתר",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 18351,
    fileName: "איכון מקורות לרעידה בים",
    category: "סיסמולוגיה",
    subCategory: "מוקד רע\"ד",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 51099,
    fileName: "פיזור מוקדים בגלבוע כרמל",
    category: "סיסמולוגיה",
    subCategory: "מוקד רע\"ד",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 64623,
    fileName: "הערת מקור רעד מגלי פי",
    category: "סיסמולוגיה",
    subCategory: "מוקד רע\"ד",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 83427,
    fileName: "כיול הרשת להערכת רעידות רחוקות",
    category: "סיסמולוגיה",
    subCategory: "מוקד רע\"ד",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 34157,
    fileName: "התפתחות בזמן של רעשי משנה",
    category: "סיסמולוגיה",
    subCategory: "רעידות משנה",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 67452,
    fileName: "מאגר אקסלוגרמות לתאוצות קרקע",
    category: "סיסמולוגיה",
    subCategory: "תאוצת קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 69867,
    fileName: "מודל מהירות תלת מימדי לאיכון רעידות",
    category: "סיסמולוגיה",
    subCategory: "תאוצת קרקע",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 75317,
    fileName: "תאוצות קרקע בתקן הבניה",
    category: "סיסמולוגיה",
    subCategory: "תאוצת קרקע",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 42104,
    fileName: "אלגוריתם להערכת תאוצות קרקע",
    category: "סיסמולוגיה",
    subCategory: "תאוצת קרקע",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 16932,
    fileName: "חיזוק מבני אבן",
    category: "הנדסה סיסמית",
    subCategory: "שיפור עמידות מבנים",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 44109,
    fileName: "מדריך לחיזוק מבנים",
    category: "הנדסה סיסמית",
    subCategory: "שיפור עמידות מבנים",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 25019,
    fileName: "דוגמאות לחישוב לפי 413 חלק3",
    category: "הנדסה סיסמית",
    subCategory: "שיפור עמידות מבנים",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 58538,
    fileName: "סקר רמות סיכון קביל",
    category: "הנדסה סיסמית",
    subCategory: "שיפור עמידות מבנים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 92454,
    fileName: "גישות לשדרוג סייסמי",
    category: "הנדסה סיסמית",
    subCategory: "שיפור עמידות מבנים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 57250,
    fileName: "עמידות מבנים עם קירות הקשחה",
    category: "הנדסה סיסמית",
    subCategory: "שיפור עמידות מבנים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 72333,
    fileName: "עמידות עמודים עטופים ביריעות",
    category: "הנדסה סיסמית",
    subCategory: "שיפור עמידות מבנים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 71234,
    fileName: "אופטימיזציה של מבנים מבטון",
    category: "הנדסה סיסמית",
    subCategory: "שיפור עמידות מבנים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 77055,
    fileName: "חישוב תקופה בסיסית למבנים",
    category: "הנדסה סיסמית",
    subCategory: "תכנון אנטי סייסמי",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 79621,
    fileName: "חציית העתק עי צנרת",
    category: "הנדסה סיסמית",
    subCategory: "תכנון אנטי סייסמי",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 43456,
    fileName: "שימוש בבידוד סייסמי במבנים",
    category: "הנדסה סיסמית",
    subCategory: "תכנון אנטי סייסמי",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 56246,
    fileName: "תכנון מבנה על העתק פעיל",
    category: "הנדסה סיסמית",
    subCategory: "תכנון אנטי סייסמי",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 87790,
    fileName: "פרמטרים של רעידות ותכן מבנים",
    category: "הנדסה סיסמית",
    subCategory: "תכנון אנטי סייסמי",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 84150,
    fileName: "חישוב זמן מחזור מבנים",
    category: "הנדסה סיסמית",
    subCategory: "תכנון אנטי סייסמי",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 92276,
    fileName: "עיגון מערכות לא מבניות",
    category: "הנדסה סיסמית",
    subCategory: "אלמנטים לא מבניים",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 42255,
    fileName: "זיהוי והערכת נזק בבתי חולים",
    category: "הנדסה סיסמית",
    subCategory: "הערכת נזק למבנים",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 37338,
    fileName: "יצירת תמונת מצב מבני חקלאות",
    category: "הנדסה סיסמית",
    subCategory: "הערכת נזק למבנים",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 64080,
    fileName: "מודל תומך החלטה להתרעת צונמי",
    category: "היערכות לצונאמי",
    subCategory: "מערך \"מים אדירים\"",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 39868,
    fileName: "תפיסה לאומית לצונמי",
    category: "היערכות לצונאמי",
    subCategory: "תפיסה לאומית לצונמי",
    informationType: "תוכניות",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 22843,
    fileName: "פרמטרים להתרעה להפסקת פעילות",
    category: "התרעה לרעידת אדמה",
    subCategory: "מערכות התרעה מקומיות",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 73218,
    fileName: "תפיסת הציבור את תרועה",
    category: "התרעה לרעידת אדמה",
    subCategory: "מערכת \"תרועה\"",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 66336,
    fileName: "סקר היתכנות למערכת התרעה",
    category: "התרעה לרעידת אדמה",
    subCategory: "מערכת \"תרועה\"",
    informationType: "דוחות",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 74535,
    fileName: "מדיניות התרעה לרעידות אדמה",
    category: "התרעה לרעידת אדמה",
    subCategory: "מערכת \"תרועה\"",
    informationType: "דוחות",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 70208,
    fileName: "ועדה בינל להקמת מערכת התרעה",
    category: "התרעה לרעידת אדמה",
    subCategory: "מערכת \"תרועה\"",
    informationType: "דוחות",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 73445,
    fileName: "בחינה ראשונית למערכת התרעה",
    category: "התרעה לרעידת אדמה",
    subCategory: "מערכת \"תרועה\"",
    informationType: "דוחות",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 87158,
    fileName: "אופטימיזציה של אלגוריתם התרעה",
    category: "התרעה לרעידת אדמה",
    subCategory: "מערכת \"תרועה\"",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 74130,
    fileName: "נספחים מדריך היערכות אתרי מורשת",
    category: "היערכות אתרי מורשת",
    subCategory: "סיכונים באתרי מורשת",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 11343,
    fileName: "נספחים תיק שטח אתרי מורשת",
    category: "היערכות אתרי מורשת",
    subCategory: "סיכונים באתרי מורשת",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 21774,
    fileName: "מדריך היערכות אתרי מורשת",
    category: "היערכות אתרי מורשת",
    subCategory: "סיכונים באתרי מורשת",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 78076,
    fileName: "דוח שיקום ארוך טווח",
    category: "שיקום ארוך טווח",
    subCategory: "שיקום ארוך טווח",
    informationType: "תוכניות",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 10109,
    fileName: "סגנון תקשורת סיכונים",
    category: "היבטים חברתיים כלכליים",
    subCategory: "מוכנות הציבור",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 84234,
    fileName: "סקר תפיסות האוכלוסיה על רעד",
    category: "היבטים חברתיים כלכליים",
    subCategory: "מוכנות הציבור",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 77601,
    fileName: "הגדרת צורכי אוכלוסיות פגיעות אחרי רעידה",
    category: "היבטים חברתיים כלכליים",
    subCategory: "מוכנות הציבור",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },
  {
    id: 88352,
    fileName: "מוכנות אוכלוסיית החרדים לרעידה",
    category: "היבטים חברתיים כלכליים",
    subCategory: "אוכלוסיות ומגזרים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 12972,
    fileName: "מחקר בתי ספר ניסויים",
    category: "היבטים חברתיים כלכליים",
    subCategory: "אוכלוסיות ומגזרים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 79084,
    fileName: "מחקר בתי ספר מערך",
    category: "היבטים חברתיים כלכליים",
    subCategory: "אוכלוסיות ומגזרים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 83491,
    fileName: "מחקר בתי ספר חוברת לתלמיד",
    category: "היבטים חברתיים כלכליים",
    subCategory: "אוכלוסיות ומגזרים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 37831,
    fileName: "מחקר בתי ספר השוואה",
    category: "היבטים חברתיים כלכליים",
    subCategory: "אוכלוסיות ומגזרים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 20816,
    fileName: "התנהגות אוכלוסיה עם מוגבלות",
    category: "היבטים חברתיים כלכליים",
    subCategory: "אוכלוסיות ומגזרים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 48441,
    fileName: "הנחיות בפישוט לשוני",
    category: "היבטים חברתיים כלכליים",
    subCategory: "אוכלוסיות ומגזרים",
    informationType: "מדריכים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 90158,
    fileName: "הערכת נזק כלכלי באילת",
    category: "היבטים חברתיים כלכליים",
    subCategory: "היבטים כלכליים",
    informationType: "מחקרים",
    language: "english",
    isPublish: false,
    status: "init"
  },

  {
    id: 41871,
    fileName: "הערכת נזקים מאקרו כלכליים",
    category: "היבטים חברתיים כלכליים",
    subCategory: "היבטים כלכליים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 38075,
    fileName: "חוסן תעשיית האירוח בישראל",
    category: "היבטים חברתיים כלכליים",
    subCategory: "היבטים כלכליים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 76408,
    fileName: "היערכות לרעד בעסקים קטנים",
    category: "היבטים חברתיים כלכליים",
    subCategory: "היבטים כלכליים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 41185,
    fileName: "המערך הרגולטורי לרעידת אדמה",
    category: "היבטים חברתיים כלכליים",
    subCategory: "היבטים משפטיים",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 36865,
    fileName: "חבילות מדיניות לחיזוק מבנים בפריפריה",
    category: "היבטים חברתיים כלכליים",
    subCategory: "מוכנות המדינה",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  },
  {
    id: 57314,
    fileName: "גישות בהליך זיהוי אלמונים",
    category: "היבטים חברתיים כלכליים",
    subCategory: "מוכנות המדינה",
    informationType: "מחקרים",
    language: "hebrew",
    isPublish: false,
    status: "init"
  }
];
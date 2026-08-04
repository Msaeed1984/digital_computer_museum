# Digital Computer Museum

موقع HTML تفاعلي ثابت لعرض مجموعة تاريخ الحاسب، ومناسب للنشر مباشرة عبر GitHub Pages.

## الملفات

- `index.html` الصفحة الرئيسية
- `styles.css` التصميم والحركات
- `script.js` التفاعل، التكبير، النقاط التفاعلية، اللغتان والاختبار
- `assets/` صور المجموعة

## النشر على GitHub Pages

1. أنشئ Repository جديدًا في GitHub.
2. ارفع جميع الملفات والمجلد `assets` كما هي.
3. افتح:
   `Settings → Pages`
4. ضمن **Build and deployment** اختر:
   `Deploy from a branch`
5. اختر الفرع:
   `main`
   والمجلد:
   `/ (root)`
6. اضغط **Save**.
7. سيظهر رابط الموقع بعد دقيقة أو دقيقتين.

## ربط QR

بعد ظهور رابط GitHub Pages:
1. انسخ رابط الموقع.
2. أنشئ QR Code للرابط.
3. اطبع الرمز وضعه بجانب واجهة العرض.

## إضافة قطعة جديدة

في `index.html` أضف hotspot جديدًا:

```html
<button class="hotspot"
        style="--x:50%;--y:50%"
        data-item="newitem">
  <i></i><span>5</span>
</button>
```

ثم أضف بياناتها داخل كائن `artifacts` في `script.js`.

## ملاحظة عن 3D الحقيقي

النسخة الحالية تستخدم حركة ثلاثية الأبعاد وتكبيرًا تفاعليًا للصور. لإضافة نموذج 3D حقيقي لاحقًا، يمكن إدراج ملفات `.glb` أو `.gltf` باستخدام `<model-viewer>`.

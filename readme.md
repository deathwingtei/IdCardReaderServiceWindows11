# Program Download

ดาวน์โหลด โปรแกรม ได้ที่นี่ https://software.thaiware.com/11913-Siam-ID-Download.html
ดาวน์โหลด ไดรเวอร์ ได้ที่นี่ https://zoweetek.cn/wp-content/uploads/2017/10/9540-V2.zip
ดาวน์โหลดไฟล์ SDK สำหรับผู้นักพัฒนาโปรแกรม https://zoweetek.cn/wp-content/uploads/2018/05/AU-9540-demotool.zip
โปรแกรมทดลอง เครื่องอ่านบัตร ZOWEETEK https://zoweetek.cn/wp-content/uploads/2018/07/Smart-card-reader-test-software.zip

## For run npm in Windows Power Shell

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

## Windows 11 tools

Download Visual Studio Build Tools:

ลิงก์ตรงไปยังหน้าดาวน์โหลด: https://visualstudio.microsoft.com/downloads/
เมื่อคุณไปที่หน้านั้น ให้มองหา "Tools for Visual Studio" และคลิกที่ "Build Tools for Visual Studio 2022" (หรือเวอร์ชันล่าสุดที่มี) เพื่อดาวน์โหลดตัวติดตั้ง
ขั้นตอนการติดตั้ง (เมื่อตัวติดตั้งดาวน์โหลดเสร็จ):

เรียกใช้ตัวติดตั้งที่คุณดาวน์โหลดมา

คุณจะเห็นหน้าจอ "Visual Studio Installer"

ในแท็บ "Workloads" ให้เลือก:

"C++ build tools"

ในทางด้านขวามือในส่วน "Installation details" ให้ตรวจสอบให้แน่ใจว่าคุณได้เลือก:

"Windows 10 SDK" (หรือ Windows 11 SDK หากคุณใช้ Windows 11)

"CMake tools for Windows"

คลิก "Install"

### Path may be

C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\Tools\MSVC\14.43.34808\bin\Hostx64\x64

C:\Program Files (x86)\Windows Kits\10\bin\10.0.26100.0\x64

C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin

### นำไป Add ใน ENV ของ Windows กรณี Power Shell หาไม่เจอ

หลังจาก Set แล้ว พิมพ์คำสั่งต่างๆเพื่อดูคำสั่งว่าเจอที่ติดตั้งหรือไม่

cl

node -v

npm -v

python --version

cmake --version

## Library

thai-id-card-reader - npm

## For Running Service windows (Set Path Want to collect this data and must be not move)

node service.js

## Uninstallation

To uninstall the IdCardReaderService, follow these steps:

<!-- 1. **Open a command prompt or PowerShell as administrator.**
2. **Navigate to the directory containing `uninstall_service.js` and `IdCardReaderServiceWindows11.exe`.**
3. **Run the following command:**

    ```bash
    node uninstall_service.js
    ``` 
**Important:** Ensure you have Node.js installed.
-->

1. Run service.msc or sersearch services and open app
2. Find BS Thai Smart Card Reader Service and stop
3. go to Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\bsthaismartcardreaderservice.exe and delete
4. restart Computer

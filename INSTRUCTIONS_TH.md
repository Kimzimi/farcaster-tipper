# 🎯 คู่มือการใช้งาน Karma Tipper (ฉบับสมบูรณ์)

## ✨ ฟีเจอร์ใหม่ล่าสุด

### ✅ สิ่งที่ได้เพิ่มเข้ามา:

1. **ปุ่มเชื่อม Wallet ขนาดใหญ่** - มองเห็นชัดเจน มี icon สวยงาม
2. **เปลี่ยน Network อัตโนมัติ** - เมื่อเชื่อม wallet จะเปลี่ยนไป Base mainnet ทันที
3. **แสดงสถานะ Network** - เห็นว่าอยู่ chain ไหน
4. **ปุ่ม Switch Network** - กดเปลี่ยน chain ได้ง่าย
5. **ส่ง Transaction จริง** - ส่ง DEGEN token จากกระเป๋าตัวเอง
6. **ดู Transaction บน BaseScan** - คลิกดู transaction ได้ทันที

---

## 🚀 วิธีใช้งาน

### ขั้นตอนที่ 1: เปิดเว็บไซต์

```
https://farcaster-tipperbs.vercel.app/
```

### ขั้นตอนที่ 2: เชื่อม Wallet

เมื่อเปิดเว็บจะเห็น:

```
🔗 Connect Your Wallet to Send Tips

[🔵 Connect Coinbase Wallet]
[🦊 Connect MetaMask]
[🌐 Connect WalletConnect]
```

**เลือกปุ่มใดปุ่มหนึ่ง:**
- **Coinbase Wallet** - สำหรับผู้ใช้ Coinbase
- **MetaMask** - wallet ยอดนิยม
- **WalletConnect** - เชื่อมกับ wallet อื่นๆ

### ขั้นตอนที่ 3: อนุมัติการเชื่อมต่อ

ระบบจะ:
1. ✅ เปิด popup wallet
2. ✅ ขออนุญาตเชื่อมต่อ
3. ✅ **เปลี่ยนไป Base mainnet อัตโนมัติ**

หากไม่เปลี่ยนอัตโนมัติ คลิก:
```
[Switch to Base Network]
```

### ขั้นตอนที่ 4: ตรวจสอบสถานะ

หลังเชื่อมสำเร็จจะเห็น:

```
┌─────────────────────────────┐
│ Connected Wallet            │
│ 0x1234...5678    [Disconnect]│
│                             │
│ Network: ✓ Base Mainnet     │
└─────────────────────────────┘
```

### ขั้นตอนที่ 5: ใส่ข้อมูล

**1. Recipient Address:**
```
0xAbCdEf...1234
```
ใส่ wallet address ของผู้รับ

**2. เลือกจำนวน DEGEN:**
- คลิก `100`, `250`, `500`
- หรือใส่ตัวเลขเอง

### ขั้นตอนที่ 6: ส่ง Tip!

คลิกปุ่ม:
```
[✨ Send 100 $DEGEN]
```

**กระบวนการ:**
1. ⏳ Waiting for Approval... (รอ approve ใน wallet)
2. ⏳ Confirming on Chain... (รอ blockchain confirm)
3. ✓ Tip Sent Successfully! (สำเร็จ!)

### ขั้นตอนที่ 7: ดู Transaction

หลังส่งสำเร็จจะเห็น:

```
┌────────────────────────────────┐
│ Transaction Submitted:         │
│ 0xabc123...def789             │
│ [View on BaseScan →]          │
└────────────────────────────────┘
```

คลิกเพื่อดูรายละเอียดใน BaseScan

---

## 🎨 หน้าจอการใช้งาน

### ก่อนเชื่อม Wallet:
```
┌─────────────────────────────────┐
│           ✨                    │
│      Karma Tipper               │
│  Support great content...       │
│                                 │
│ 🔗 Connect Your Wallet          │
│                                 │
│ [🔵 Connect Coinbase Wallet]    │
│ [🦊 Connect MetaMask]           │
│ [🌐 Connect WalletConnect]      │
│                                 │
│ 💡 How it works:                │
│ 1. Connect your wallet          │
│ 2. Enter recipient & amount     │
│ 3. Send DEGEN tokens            │
└─────────────────────────────────┘
```

### หลังเชื่อม Wallet:
```
┌─────────────────────────────────┐
│           ✨                    │
│      Karma Tipper               │
│                                 │
│ Connected: 0x1234...5678        │
│ Network: ✓ Base Mainnet         │
│                                 │
│ Recipient Address:              │
│ [0x...________________]         │
│                                 │
│ Select Tip Amount:              │
│ [100] [250] [500]               │
│ [Custom: ___________]           │
│                                 │
│ [✨ Send 100 $DEGEN]            │
└─────────────────────────────────┘
```

---

## 🔄 การเปลี่ยน Network อัตโนมัติ

### วิธีทำงาน:

1. **เชื่อม Wallet ครั้งแรก**
   - ระบบจะตรวจสอบ chain ปัจจุบัน
   - ถ้าไม่ใช่ Base → เปลี่ยนอัตโนมัติ

2. **แสดง Network Status**
   ```
   ✓ Base Mainnet (สีเขียว)
   หรือ
   ⚠ Ethereum Mainnet (สีเหลือง)
   ```

3. **ปุ่ม Switch**
   - ถ้าไม่ใช่ Base จะมีปุ่ม:
   ```
   [Switch to Base Network]
   ```

4. **Validation**
   - ปุ่มส่ง tip จะใช้งานได้ก็ต่อเมื่อ:
     - ✅ เชื่อม wallet แล้ว
     - ✅ อยู่บน Base mainnet
     - ✅ ใส่ recipient address
     - ✅ ใส่จำนวน

---

## 💰 ข้อมูล DEGEN Token

- **Contract Address**: `0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed`
- **Chain**: Base (Chain ID: 8453)
- **Decimals**: 18

### ตรวจสอบยอด DEGEN:
1. เปิด wallet
2. เพิ่ม DEGEN token (ใช้ contract address ด้านบน)
3. Switch ไป Base network
4. ดูยอด

---

## 🛠️ Troubleshooting

### ปัญหา: ไม่เห็นปุ่มเชื่อม wallet

**วิธีแก้:**
- Refresh หน้าเว็บ (F5)
- เช็คว่า JavaScript เปิดอย่ใน browser
- ลองใช้ browser อื่น (Chrome, Firefox)

### ปัญหา: เชื่อมแล้วแต่ไม่เปลี่ยน network

**วิธีแก้:**
1. คลิกปุ่ม `Switch to Base Network`
2. Approve ใน wallet
3. รอสักครู่

### ปัญหา: ส่ง tip ไม่ได้

**เช็คว่า:**
- ✅ เชื่อม wallet แล้ว?
- ✅ อยู่ Base mainnet?
- ✅ มี DEGEN token พอ?
- ✅ ใส่ recipient address ถูกต้อง?
- ✅ มี ETH สำหรับ gas fee?

### ปัญหา: Transaction pending นาน

**วิธีแก้:**
- เช็ค BaseScan: https://basescan.org/
- รอ 1-2 นาที
- เช็คว่า gas fee พอหรือไม่

---

## 🌟 Tips การใช้งาน

### 1. ใช้ Coinbase Wallet (แนะนำ!)
- รองรับ Base native
- เปลี่ยน network ได้เร็ว
- UI สวย ใช้ง่าย

### 2. เตรียม Gas Fee
- ต้องมี ETH บน Base นิดหน่อย
- ประมาณ $0.01-0.05 ต่อ transaction

### 3. ทดสอบก่อน
- ส่งจำนวนน้อยๆ ก่อน (เช่น 10 DEGEN)
- เช็คว่า address ถูกต้อง
- ดู transaction ใน BaseScan

### 4. บันทึก Transaction Hash
- Copy เก็บไว้เผื่อตรวจสอบ
- Share ให้ผู้รับดูได้

---

## 📱 ใช้บน Mobile

### iOS / Android:
1. เปิด Coinbase Wallet app หรือ MetaMask app
2. ไปที่ Browser ใน app
3. เข้า: `https://farcaster-tipperbs.vercel.app/`
4. ใช้งานได้เหมือนบน desktop

---

## 🔐 ความปลอดภัย

### ⚠️ สิ่งที่ต้องระวัง:

1. **ตรวจสอบ URL**
   - ใช้เฉพาะ: `https://farcaster-tipperbs.vercel.app/`
   - อย่าคลิกลิงก์ปลอม

2. **Recipient Address**
   - ตรวจสอบให้แน่ใจว่าถูกต้อง
   - ส่งผิด address = เงินหาย!

3. **Approve Transaction**
   - อ่านรายละเอียดก่อน approve
   - ดูจำนวนและ recipient

4. **Network**
   - ใช้เฉพาะ Base mainnet
   - อย่าส่งบน network อื่น

---

## 📊 ข้อมูล Gas Fee

| จำนวน DEGEN | Gas Fee (โดยประมาณ) |
|--------------|---------------------|
| 100          | ~$0.01 USD         |
| 500          | ~$0.01 USD         |
| 1000         | ~$0.02 USD         |

*หมายเหตุ: Gas fee ขึ้นอยู่กับ network congestion*

---

## 🎯 Use Cases

### 1. ให้ทิปคอนเทนต์บน Farcaster
- เห็นโพสต์ดีๆ → ส่ง tip
- รวดเร็ว ง่าย ไม่ยุ่งยาก

### 2. รางวัลครีเอเตอร์
- จัดกิจกรรม
- แจกรางวัลผู้ชนะ

### 3. Support โปรเจค
- ส่ง tip สนับสนุนนักพัฒนา
- ร่วมสมทบทุน

---

## 📞 ต้องการความช่วยเหลือ?

### เอกสาร:
- **Farcaster**: https://docs.farcaster.xyz/
- **Base**: https://docs.base.org/
- **DEGEN**: https://www.degen.tips/

### ชุมชน:
- **Warpcast**: https://warpcast.com/
- **GitHub**: https://github.com/Kimzimi/farcaster-tipper

---

## 🎉 สรุป

**Karma Tipper** ตอนนี้มีฟีเจอร์ครบ:

✅ ปุ่มเชื่อม wallet ใหญ่ชัดเจน
✅ เปลี่ยน Base network อัตโนมัติ
✅ แสดงสถานะ network
✅ ส่ง DEGEN token จริง
✅ ดู transaction บน BaseScan
✅ รองรับ mobile
✅ UI/UX สวยงาม

---

**เริ่มใช้งานได้เลยที่:** https://farcaster-tipperbs.vercel.app/

**แชร์ความรักและ support ครีเอเตอร์ที่คุณชื่นชอบ!** 💜✨

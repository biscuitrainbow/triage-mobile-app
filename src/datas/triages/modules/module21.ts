import { level, questionType, choiceType, criteriaType } from '../meta';

const result = {
	red1: {
		code: '21 แดง 1',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
					descriptions: [ '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป' ],
				},
				{
					title: '2. นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
					descriptions: [
						' พร้อมบอกว่าญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆ ก่อนนะค่ะ กระผม/ดิฉัน จะบอกคุณว่า ต้องทำไรค่ะ',
					],
				},
				{
					title: 'สอนวิธีปั๊มหัวใจ',
					descriptions: [
						'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
						'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
						'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)',
					],
				},
			],
			notes: [
				'1. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
				'2. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
				'3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
				'4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
			],
		},
	},
	red2: {
		code: '21 แดง 2',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนราบศีรษะสูง ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red3: {
		code: '21 แดง 3',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่าผู้ป่วยนอนราบศีรษะต่ำ',
					descriptions: [ 'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท ' ],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red4: {
		code: '21 แดง 4',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนตะแคงซ้าย',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red5: {
		code: '21 แดง 5',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. หากกดห้ามเลือดไม่หยุด',
					descriptions: [
						'ให้ทำการขันชะเนาะ โดยใช้ผ้าที่หนาประมาณ 1 .5 นิ้ว รัดเหนือบาดแผลประมาณ 5-10 ซม. รัดจนกว่าเลือดจนจะหยุด หรือจนคลำชีพจรไม่ได้  พร้อมบันทึกเวลาที่ทำการขันชะเนาะไว้ด้วย',
					],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '5. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2. หากทำการขันชะเนาะเส้นแรกแล้วเลือดยังไม่หยุด สามารถรัดเพิ่มได้อีก 1 เส้น โดยรัดเหนือเส้นแรก 5-10 ซม. หลีกเลี่ยงบริเวณข้อต่อ เนื่องจากจะทำให้การขันชะเนาะมีประสิทธิภาพลดลง',
			],
		},
	},
	red6: {
		code: '21 แดง 6',
		level: level.red,
		advise: {
			contents: [],
			notes: [],
		},
	},
	red7: {
		code: '21 แดง 7',
		level: level.red,
		advise: {
			contents: [],
			notes: [],
		},
	},
	red8: {
		code: '21 แดง 8',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่าผู้ป่วยนอนในท่าที่สบาย',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red9: {
		code: '21 แดง 9',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. ให้ผู้พบเห็นเหตุการณ์ ตั้งสติ อย่าเคลื่อนย้ายผู้ป่วย',
					descriptions: [],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย' ],
		},
	},
	yellow1: {
		code: '21 เหลือง 1',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่าผู้ป่วยนอนในท่าที่สบาย  อยู่ในสถานที่อากาศถ่ายเท',
					descriptions: [],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow2: {
		code: '21 เหลือง 2',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow3: {
		code: '21 เหลือง 3',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่าผู้ป่วยนอนในท่าที่สบาย',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow4: {
		code: '21 เหลือง 4',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [ 'หากมีอุปกรณ์ดาม ให้ดามส่วนที่ผิดรูประหว่างรอรถพยาบาล' ],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow5: {
		code: '21 เหลือง 5',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่าผู้ป่วยให้นอนอยู่ในท่าที่สบาย อากาศถ่ายเท',
					descriptions: [],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow6: {
		code: '21 เหลือง 6',
		level: level.yellow,
		advise: {
			contents: [],
			notes: [],
		},
	},
	yellow8: {
		code: '21 เหลือง 8',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [ 'หากมีอุปกรณ์ดาม ให้ดามส่วนที่ผิดรูประหว่างรอรถพยาบาล' ],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '6. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow9: {
		code: '21 เหลือง 9',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [ 'หากมีอุปกรณ์ดาม ให้ดามส่วนที่ผิดรูประหว่างรอรถพยาบาล' ],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ไม่แตะต้องอาวุธในที่เกิดเหตุ สงวนพยานหลักฐาน',
					descriptions: [],
				},
				{
					title: '4. ถ้ามีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '5. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	green1: {
		code: '21 เขียว 1',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'ปิดแผลด้วยผ้าสะอาด',
					descriptions: [ 'และให้ญาติพาผู้ป่วยไปรับการตรวจรักษาที่โรงพยาบาลใกล้บ้าน' ],
				},
			],
			notes: [],
		},
	},
	green2: {
		code: '21 เขียว 2',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ญาติพาพาผู้ป่วยไปรับการตรวจรักษาที่โรงพยาบาลใกล้บ้าน',
					descriptions: [],
				},
			],
			notes: [],
		},
	},
	green4: {
		code: '21 เขียว 4',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'ทำการดามบริเวณที่บาดเจ็บ',
					descriptions: [ 'แนะนำให้ญาติพาพาผู้ป่วยไปรับการตรวจรักษาที่โรงพยาบาลใกล้บ้าน' ],
				},
			],
			notes: [],
		},
	},
	green5: {
		code: '21 เขียว 5',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ญาติพาพาผู้ป่วยไปแจ้งความที่โรงพัก',
					descriptions: [ 'และไปรับการตรวจรักษาที่โรงพยาบาลใกล้บ้าน' ],
				},
			],
			notes: [],
		},
	},
	green7: {
		code: '21 เขียว 7',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'หากบาดเจ็บเล็กน้อยแนะนำให้ญาติพาไปรับการตรวจรักษาที่โรงพยาบาลใกล้บ้าน',
					descriptions: [],
				},
			],
			notes: [],
		},
	},
	green8: {
		code: '21 เขียว 8',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ล้างตา ผ่านน้ำสะอาดแบบไหลผ่าน',
					descriptions: [ 'หากอาการไม่ดีขึ้น แนะนำให้ญาติพาไปรับการตรวจรักษาที่โรงพยาบาลใกล้บ้าน' ],
				},
			],
			notes: [],
		},
	},
	white1: {
		code: '21 ขาว 1',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ผู้ป่วยประคบเย็นใน 24 ชั่วโมงแรก',
					descriptions: [
						'และประคบร้อน 24 ชั่วโมงหลัง  หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
	white2: {
		code: '21 ขาว 2',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ญาติเกลี่ยกล่อมให้นอนพัก ',
					descriptions: [
						'หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
	white3: {
		code: '21 ขาว 3',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ญาติเกลี่ยกล่อมให้นอนพัก ',
					descriptions: [
						'รับประทานยาแก้ปวด หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ ',
					],
				},
			],
			notes: [],
		},
	},
	white4: {
		code: '21 ขาว 4',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'ทำการดามบริเวณที่บาดเจ็บ',
					descriptions: [ 'แนะนำให้ญาติพาไปรับการตรวจรักษาที่โรงพยาบาลใกล้บ้าน' ],
				},
			],
			notes: [],
		},
	},
	white5: {
		code: '21 ขาว 5',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'ทำการล้างแผลด้วยน้ำสบู่',
					descriptions: [
						'เช็คให้แห้งป้ายยาฆ่าเชื้อ หากแผลบวมแดง หรือมีน้ำเหลืองซ้ำ  แนะนำให้ญาติพาไปรับการตรวจรักษาที่โรงพยาบาลใกล้บ้าน',
					],
				},
			],
			notes: [],
		},
	},
};

const questions = [
	{
		name: 'ตำรวจอยู่ในที่เกิดเหตุหรือไม่',
		type: questionType.single,
		from: 0,
		choices: [
			{
				type: choiceType.question,
				name: 'ไม่มีตำรวจ',
				to: 1,
			},
			{
				type: choiceType.question,
				name: 'มีตำรวจอยู่ในที่เกิดเหตุแล้ว (คาดว่าปลอดภัย)',
				to: 1,
			},
		],
	},
	{
		name: 'ผู้ป่วยรู้สึกตัวหรือไม่',
		type: questionType.single,
		from: 1,
		choices: [
			{
				type: choiceType.question,
				name: 'ไม่รู้สึกตัว',
				to: 2,
			},
			{
				type: choiceType.question,
				name: 'รู้สึกตัว',
				to: 3,
			},
			{
				type: choiceType.result,
				name: 'กำลังชัก',
				result: result.red6,
			},
			{
				type: choiceType.result,
				name: 'ผู้แจ้งตรวจสอบยืนยันรายละเอียดของผู้ป่วยไม่ได้',
				result: result.yellow9,
			},
		],
	},
	{
		name: 'อย่าขยับผู้ป่วย (โดยเฉพาะส่วนศรีษะและคอ) แล้วเรียกผู้ป่วยดังๆ ผู้ป่วยรู้สึกตัวขึ้นหรือไม่',
		type: questionType.single,
		from: 2,
		choices: [
			{
				type: choiceType.result,
				name: 'ยังคงไม่รู้สึกตัว',
				result: result.red1,
			},
			{
				type: choiceType.question,
				name: 'พอรู้สึกตัว',
				to: 3,
			},
		],
	},
	{
		name: 'ลักษณะอาการหายใจเป็นอย่างไร',
		type: questionType.single,
		from: 3,
		choices: [
			{
				type: choiceType.result,
				name: 'พูดได้แค่ประโยคสั้นๆ/พูดติดขัด',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'หายใจเร็ว ซี่โครงบาน จมูกบาน ไหปลาร้ายุบ',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'หายใจมีเสียงดัง',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ผู้ป่วยต้องลุกขึ้นนั่งหรือยืนเพื่อให้หายใจได้ดีขึ้น',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ตัวซีดและเหงือท่วมตัว',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย',
				result: result.red2,
			},
			{
				type: choiceType.question,
				name: 'พูดได้ / หายใจปกติ',
				to: 4,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่',
		type: questionType.checkbox,
		from: 4,
		to: 5,
		criteria: {
			type: criteriaType.result,
			minimum: 2,
			result: result.red3,
		},
		choices: [
			{
				name: 'เหงื่อท่วมตัว',
				checked: false,
			},
			{
				name: 'ซีดและผิวซีดเย็น',
				checked: false,
			},
			{
				name: 'เป็นลมหรือเกือบเป็นลมเมื่อลุกนั่งหรือยืน',
				checked: false,
			},
		],
	},
	{
		name: 'ผู้ป่วยชักหลังการบาดเจ็บหรือไม่',
		type: questionType.single,
		from: 5,
		choices: [
			{
				type: choiceType.result,
				name: 'ชัก',
				result: result.red6,
			},
			{
				type: choiceType.question,
				name: 'ไม่ชัก',
				to: 6,
			},
		],
	},
	{
		name: 'ขณะนี้ผู้ป่วยยังมีเลือดออกอยู่หรือไม่',
		type: questionType.single,
		from: 6,
		choices: [
			{
				type: choiceType.question,
				name: 'เลือดยังไหลอยู่',
				to: 7,
			},
			{
				type: choiceType.question,
				name: 'ไม่มีเลือดออก/หยุดแล้ว',
				to: 8,
			},
		],
	},
	{
		name: 'ให้ใช้ผ้าสะอาดหนาๆ กดบนแผลแน่นๆ ค้างไว้ แล้วมีเลือดชุ่มขึ้นมาหรือไม่',
		type: questionType.single,
		from: 7,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.red5,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 8,
			},
		],
	},
	{
		name: 'ผู้ป่วยถูกทำร้ายด้วยอะไร',
		type: questionType.single,
		from: 8,
		choices: [
			{
				type: choiceType.question,
				name: 'ถูกแทง',
				to: 9,
			},
			{
				type: choiceType.question,
				name: 'ถูกยิง',
				to: 9,
			},
			{
				type: choiceType.question,
				name: 'อื่นๆ',
				to: 10,
			},
		],
	},
	{
		name: 'แผลดังกล่าวที่ส่วนใดของร่างกายบ้าง',
		type: questionType.single,
		from: 9,
		choices: [
			{
				type: choiceType.result,
				name: 'ศรีษะหรือคอ',
				result: result.red8,
			},
			{
				type: choiceType.result,
				name: 'ทรวงอก',
				result: result.red8,
			},
			{
				type: choiceType.result,
				name: 'ช่องท้อง',
				result: result.red8,
			},
			{
				type: choiceType.result,
				name: 'แขนหรือขา',
				result: result.yellow1,
			},
		],
	},
	{
		name: 'มีกระดูกหักหรือไม่',
		type: questionType.single,
		from: 10,
		choices: [
			{
				type: choiceType.question,
				name: 'มี',
				to: 11,
			},
			{
				type: choiceType.result,
				name: 'ไม่มี',
				result: result.white1,
			},
		],
	},
	{
		name: 'กระดูกหักตำแหน่งใดบ้าง',
		type: questionType.single,
		from: 11,
		choices: [
			{
				type: choiceType.result,
				name: 'ต้นคอ / หลัง / กระดูกเชิงกราน / ต้นขา / ต้นแขน',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'อื่นๆ',
				result: result.green1,
			},
		],
	},
];

const module21 = {
	name: 'ถูกทำร้าย',
	module: 21,
	description: 'ถูกทำร้าย',
	image: 'assets/imgs/bear-attacking.png',
	questions: questions,
};

export default module21;
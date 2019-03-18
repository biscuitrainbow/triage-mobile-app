import { choiceType, level, questionType } from '../meta';
import { result as resultModule14 } from './module14';
import { result as resultModule7 } from './module7';

const result = {
	red1: {
		code: '5 แดง 1',
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
						' พร้อมบอกญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆก่อน กระผม/ดิฉัน จะบอกคุณว่า ต้องอะไร',
					],
				},
				{
					title: '3. สอนวิธีปั๊มหัวใจ',
					descriptions: [
						'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
						'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
						'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเหนื่อยล้า สามารถเปลี่ยนคนได้)',
					],
				},
			],
			notes: [
				'1. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
				'2. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
			],
		},
	},
	red2: {
		code: '5 แดง 2',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนราบศีรษะสูง ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '3. ให้ญาติผู้พบเห็นเหตุการณ์เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด ',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red3: {
		code: '5 แดง 3',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
					descriptions: [ 'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red4: {
		code: '5 แดง 4',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
					descriptions: [ 'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red6: {
		code: '5 แดง 6',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนอยู่ในท่าที่สบาย',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	yellow1: {
		code: '5 เหลือง 1',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนอยู่ในท่าที่สบาย',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. แนะนำไม่ให้บีบหรือนวด บริเวณที่มีอาการชา',
					descriptions: [],
				},
				{
					title: '3. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [],
		},
	},
	yellow2: {
		code: '5 เหลือง 2',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนราบศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [],
		},
	},
	yellow4: {
		code: '5 เหลือง 4',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนราบศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [],
		},
	},
	yellow5: {
		code: '5 เหลือง 5',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนอยู่ในท่าที่สบาย',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [],
		},
	},
	yellow7: {
		code: '5 เหลือง 7',
		level: level.yellow,
		advise: {
			contents: [],
			notes: [],
		},
	},
	yellow8: {
		code: '5 เหลือง 8',
		level: level.yellow,
		advise: {
			contents: [],
			notes: [],
		},
	},
	yellow9: {
		code: '5 เหลือง 9',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนอยู่ในท่าที่สบาย',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	green1: {
		code: '5 เขียว 1',
		level: level.green,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนราบศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
				{
					title: '4. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
					descriptions: [],
				},
			],
			notes: [],
		},
	},
	green4: {
		code: '5 เขียว 4',
		level: level.green,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนอยู่ในท่าที่สบาย',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '3. หากทำตามคำแนะนำข้อ 3 แล้วไม่ดีขึ้น ให้โทรแจ้ง 1669 อีกครั้ง',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [],
		},
	},
	green6: {
		code: '5 เขียว 6',
		level: level.green,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้สังเกตอาการผู้ป่วยอยู่ที่บ้าน',
					descriptions: [ 'หากมีอาการผิดปกติ ให้ญาติพาผู้ป่วยส่ง รพ.' ],
				},
			],
			notes: [],
		},
	},
	green7: {
		code: '5 เขียว 7',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green8: {
		code: '5 เขียว 8',
		level: level.green,
		advise: {
			contents: [
				{
					title: '1. ล้างตาด้วยน้ำสะอาด ไม่แนะนำให้ใช้ยาหยอดตาหรือยาป้ายตา',
					descriptions: [],
				},
				{
					title: '2. หากถูกบริเวณอื่นที่ไม่ใช่ตา ให้ล้างด้วยน้ำสะอาดและสบู่ ',
					descriptions: [ 'ไม่ควรใช้น้ำยาใดๆ ป้าย บริเวณที่ถูกสาร' ],
				},
			],
			notes: [
				'ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล  หากอาการยังไม่ดีขึ้นให้ญาตินำผู้ป่วยส่งโรงพยาบาลใกล้บ้าน',
			],
		},
	},
	white1: {
		code: '5 ขาว 1',
		level: level.white,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้สังเกตอาการผู้ป่วยอยู่ที่บ้าน หากมีอาการผิดปกติ ให้ญาติพาผู้ป่วยส่ง รพ.',
					descriptions: [],
				},
			],
			notes: [],
		},
	},
};

const questions = [
	{
		name: 'ผู้ป่วยรู้สึกตัวหรือไม่',
		type: questionType.single,
		from: 0,
		choices: [
			{
				type: choiceType.question,
				name: 'ไม่รู้สึกตัว',
				to: 1,
			},
			{
				type: choiceType.question,
				name: 'รู้สึกตัว',
				to: 2,
			},
			{
				type: choiceType.result,
				name: 'ผู้แจ้งตรวจสอบยืนยันรายละเอียดของผู้ป่วยไม่ได้',
				result: result.yellow9,
			},
		],
	},
	{
		name: 'ตบไหล่ และปลุกเรียก ผู้ป่วยรู้สึกตัวขึ้นหรือไม่',
		type: questionType.single,
		from: 1,
		choices: [
			{
				type: choiceType.result,
				name: 'ยังคงไม่รู้สึกตัว',
				result: result.red1,
			},
			{
				type: choiceType.question,
				name: 'พอรู้สึกตัว',
				to: 2,
			},
		],
	},
	{
		name: 'ลักษณะอาการหายใจเป็นอย่างไร',
		type: questionType.single,
		from: 2,
		choices: [
			{
				type: choiceType.result,
				name: 'พูดได้แค่ประโยคสั้นๆ/พูดติดขัด',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ซี่โครงบาน จมูกบานไหปลาร้ายุบ',
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
				type: choiceType.question,
				name: 'หายใจเร็ว',
				to: 3,
			},
			{
				type: choiceType.question,
				name: 'พูดได้ / หายใจปกติ',
				to: 5,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีโรคหอบหืดหรือไม่',
		type: questionType.single,
		from: 3,
		choices: [
			{
				type: choiceType.result,
				name: 'มี',
				result: result.red2,
			},
			{
				type: choiceType.question,
				name: 'ไม่มี',
				to: 4,
			},
		],
	},
	{
		name: 'ผู้ป่วยอายุเท่าไหร่',
		type: questionType.single,
		from: 4,
		choices: [
			{
				type: choiceType.result,
				name: 'มากกว่า 20 ปี',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'น้อยกว่า 20 ปี',
				result: result.yellow8,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่',
		type: questionType.checkbox,
		from: 5,
		to: 6,
		criteria: {
			type: choiceType.result,
			minimum: 2,
			result: result.red3,
		},
		choices: [
			{
				name: 'เหงื่อท่วมตัว',
				checked: false,
			},
			{
				name: 'เป็นลมหรือเกือบเป็นลมเมื่อลุกนั่งหรือยืน',
				checked: false,
			},
			{
				name: 'ซีดและผิวซีดเย็น',
				checked: false,
			},
		],
	},
	{
		name: 'ผู้ป่วยเจ็บแน่นทรวงอกหรือไม่',
		type: questionType.single,
		from: 6,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: resultModule7.red2,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 7,
			},
		],
	},
	{
		name: 'ผู้เคยมีการใช้อ๊อกซิเจนที่บ้านและหมดถังใช่หรือไม่',
		type: questionType.single,
		from: 7,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.yellow7,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 8,
			},
		],
	},
	{
		name: 'ผู้ป่วยถูกการป้องกันตัว เช่น แก๊สน้ำตา สเปรย์พริกไทยหรือไม่',
		type: questionType.single,
		from: 8,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: resultModule14.green8,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 9,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการใดต่อไปนี้',
		type: questionType.single,
		from: 9,
		choices: [
			{
				type: choiceType.result,
				name: 'เป็นหวัด',
				result: result.white1,
			},
			{
				type: choiceType.result,
				name: 'ผู้ป่วยหรือผู้แจ้งยืนยันการขอความช่วยเหลือ',
				result: result.green6,
			},
			{
				type: choiceType.result,
				name: 'อื่นๆ',
				result: result.green7,
			},
		],
	},
];

const module5 = {
	name: 'หายใจลำบาก',
	description: 'ติดขัด',
	module: 5,
	image: 'assets/imgs/nose.png',
	color: '#CA1F13',
	questions: questions,
};

export default module5;

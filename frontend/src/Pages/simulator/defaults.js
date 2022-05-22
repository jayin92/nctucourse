export const default_options = {
    show_zero: true,
    show_details: false,
    show_pending: true,
    dnd_vibrate: true
}

export const template_107 = {
    version: 2,
    categories: [
        "必修",
        "選修",
        "通識 ─ 核心人文",
        "通識 ─ 核心社會",
        "通識 ─ 核心自然",
        "通識 ─ 跨院",
        "通識 ─ 校基本",
        "外語",
        "體育",
        "服務學習",
        "藝文賞析"
    ],
    groups: {
        "通識 ─ 核心": [
            "通識 ─ 核心人文",
            "通識 ─ 核心社會",
            "通識 ─ 核心自然"
        ],
        "通識": [
            "通識 ─ 核心",
            "通識 ─ 跨院",
            "通識 ─ 校基本"
        ]
    },
    targets: {
        "通識 ─ 跨院": [2, null],
        "通識 ─ 校基本": [6, null],
        "體育": [null, 6],
        "服務學習": [null, 2],
        "藝文賞析": [null, 2],
        "通識 ─ 核心": [6, null],
        "通識": [18, null]
    }
}

export const template_110 = {
    version: 2,
    categories: [
        "必修",
        "選修",
        "基本-批判思考",
        "基本-量性推理",
        "基本-組織管理",
        "基本-生命及品格教育",
        "領域-人文與美學",
        "領域-個人社會與文化",
        "領域-公民與倫理",
        "領域-科技與自然",
        "外語",
        "體育",
        "服務學習",
        "藝文賞析"
    ],
    groups: {
        "基本素養": [
            "基本-批判思考",
            "基本-量性推理",
            "基本-組織管理",
            "基本-生命及品格教育"
        ],
        "領域課程": [
            "領域-人文與美學",
            "領域-個人社會與文化",
            "領域-公民與倫理",
            "領域-科技與自然"
        ],
        "核心課程": [
            "基本素養",
            "領域課程"
        ]
    },
    targets: {
        "體育": [null, 6],
        "服務學習": [null, 2],
        "藝文賞析": [null, 2],
        "基本素養": [6, null],
        "領域課程": [8, null],
        "核心課程": [18, null]
    }
}
export const randomColor = (): string => {
    const letters = "0123456789ABCDEF"
    let colorCode = "#"

    for (let i = 0; i < 6; i++) {
        colorCode += letters[Math.floor(Math.random() * 16)]
    }

    return colorCode
}

export const getSlugify = (name: string): string => {
    const from = "áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ"
    const to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd"

    const strCovert = name.toLowerCase().split("").map(char => {
        const index = from.indexOf(char)
        return index !== -1 ? to[index] : char
    }).join("")

    return strCovert.replace(/\s+/g, "-").replace(/[^a-z0-9\\-]/g, "")
}
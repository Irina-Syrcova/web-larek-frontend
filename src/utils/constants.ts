export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export const settings = {

};

export function getCategoryClass(value: string): string {
    switch (value) {
        case "софт-скил":
            return "soft"
        case "другое":
            return "other"
        case "дополнительное":
            return "additional"
        case "кнопка":
            return "button"
        case "хард-скил":
            return "hard"
        default:
            return value;
    }
}
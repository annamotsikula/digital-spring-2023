import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncateString'
})
export class TruncateStringPipe implements PipeTransform {
    transform(value: string, limit: number): string {
        const words: string[] = value.split(/\s+/)
        if(words.length > limit) {
            if(limit < 0) {
                const positiveLimit = limit * -1
                return '...' + words.slice(words.length - positiveLimit, words.length).join(' ')
            }


            return words.slice(0, limit).join(' ') + '...'
        }
        return value
    }
}
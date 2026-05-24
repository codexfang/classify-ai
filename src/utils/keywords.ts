import type { ExpenseCategory } from '../types'

export interface KeywordRule {
  keyword: string
  weight: number
}

export type CategoryKeywordMap = Record<ExpenseCategory, KeywordRule[]>

/** Weighted keyword rules per expense category. */
export const CATEGORY_KEYWORDS: CategoryKeywordMap = {
  'Food & Dining': [
    { keyword: 'whole foods', weight: 10 },
    { keyword: 'trader joe', weight: 10 },
    { keyword: 'restaurant', weight: 9 },
    { keyword: 'starbucks', weight: 9 },
    { keyword: 'mcdonald', weight: 9 },
    { keyword: 'chipotle', weight: 9 },
    { keyword: 'doordash', weight: 9 },
    { keyword: 'grubhub', weight: 9 },
    { keyword: 'cafe', weight: 8 },
    { keyword: 'coffee', weight: 8 },
    { keyword: 'pizza', weight: 8 },
    { keyword: 'burger', weight: 8 },
    { keyword: 'bakery', weight: 8 },
    { keyword: 'dining', weight: 7 },
    { keyword: 'grocery', weight: 7 },
    { keyword: 'market', weight: 6 },
    { keyword: 'food', weight: 6 },
    { keyword: 'deli', weight: 7 },
    { keyword: 'sushi', weight: 8 },
    { keyword: 'taco', weight: 7 },
  ],
  Transportation: [
    { keyword: 'uber', weight: 10 },
    { keyword: 'lyft', weight: 10 },
    { keyword: 'shell', weight: 9 },
    { keyword: 'chevron', weight: 9 },
    { keyword: 'exxon', weight: 9 },
    { keyword: 'bp gas', weight: 9 },
    { keyword: 'gas station', weight: 9 },
    { keyword: 'gas', weight: 8 },
    { keyword: 'fuel', weight: 8 },
    { keyword: 'parking', weight: 8 },
    { keyword: 'metro', weight: 7 },
    { keyword: 'transit', weight: 7 },
    { keyword: 'taxi', weight: 9 },
    { keyword: 'airline', weight: 7 },
    { keyword: 'delta air', weight: 8 },
    { keyword: 'united air', weight: 8 },
    { keyword: 'car wash', weight: 6 },
    { keyword: 'toll', weight: 7 },
  ],
  Entertainment: [
    { keyword: 'netflix', weight: 10 },
    { keyword: 'spotify', weight: 10 },
    { keyword: 'hulu', weight: 10 },
    { keyword: 'disney+', weight: 10 },
    { keyword: 'disney plus', weight: 10 },
    { keyword: 'hbo', weight: 9 },
    { keyword: 'youtube premium', weight: 9 },
    { keyword: 'movie', weight: 8 },
    { keyword: 'theater', weight: 8 },
    { keyword: 'cinema', weight: 8 },
    { keyword: 'concert', weight: 8 },
    { keyword: 'steam', weight: 8 },
    { keyword: 'playstation', weight: 8 },
    { keyword: 'xbox', weight: 8 },
    { keyword: 'gaming', weight: 7 },
    { keyword: 'ticketmaster', weight: 8 },
    { keyword: 'amc', weight: 7 },
  ],
  Shopping: [
    { keyword: 'amazon', weight: 10 },
    { keyword: 'walmart', weight: 10 },
    { keyword: 'target', weight: 10 },
    { keyword: 'costco', weight: 9 },
    { keyword: 'best buy', weight: 9 },
    { keyword: 'apple store', weight: 9 },
    { keyword: 'nike', weight: 8 },
    { keyword: 'adidas', weight: 8 },
    { keyword: 'ikea', weight: 8 },
    { keyword: 'home depot', weight: 8 },
    { keyword: 'lowes', weight: 8 },
    { keyword: 'ebay', weight: 8 },
    { keyword: 'etsy', weight: 8 },
    { keyword: 'mall', weight: 7 },
    { keyword: 'retail', weight: 6 },
    { keyword: 'shop', weight: 6 },
  ],
  Utilities: [
    { keyword: 'electric', weight: 10 },
    { keyword: 'electricity', weight: 10 },
    { keyword: 'water bill', weight: 10 },
    { keyword: 'water utility', weight: 10 },
    { keyword: 'internet', weight: 9 },
    { keyword: 'comcast', weight: 9 },
    { keyword: 'xfinity', weight: 9 },
    { keyword: 'at&t', weight: 8 },
    { keyword: 'verizon', weight: 8 },
    { keyword: 't-mobile', weight: 8 },
    { keyword: 'gas bill', weight: 9 },
    { keyword: 'utility', weight: 8 },
    { keyword: 'power company', weight: 9 },
    { keyword: 'sewage', weight: 8 },
    { keyword: 'waste management', weight: 7 },
  ],
  Other: [],
}

export const SAMPLE_TRANSACTIONS = `WHOLE FOODS MARKET
UBER TRIP
NETFLIX.COM
SHELL GAS STATION
AMAZON.COM
STARBUCKS COFFEE
SPOTIFY PREMIUM
TARGET STORE
COMCAST INTERNET
CHIPOTLE MEXICAN GRILL`

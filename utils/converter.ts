export type StyleMode = 'basic' | 'elite';

const basicMap: Record<string, string> = {
  'A': 'ム', 'B': '乃', 'C': '匚', 'D': '刀', 'E': 'モ', 'F': '下', 'G': 'G', 'H': '片', 
  'I': 'エ', 'J': 'し', 'K': '|<', 'L': 'レ', 'M': '爪', 'N': '冂', 'O': 'ロ', 'P': 'ア', 
  'Q': 'Q', 'R': 'マ', 'S': '丂', 'T': 'ナ', 'U': 'ㄩ', 'V': 'レ', 'W': '山', 'X': 'メ', 
  'Y': 'ソ', 'Z': '乙', ' ': ' '
};

const eliteMap: Record<string, string> = {
  'A': '亼', 'B': '阝', 'C': '匚', 'D': '囙', 'E': 'ヨ', 'F': '下', 'G': '巳', 'H': '卄', 
  'I': '工', 'J': '勺', 'K': '长', 'L': '乚', 'M': '爪', 'N': '冂', 'O': '口', 'P': '尸', 
  'Q': 'Q', 'R': '尺', 'S': '丂', 'T': '丁', 'U': '凵', 'V': 'レ', 'W': '山', 'X': '乂', 
  'Y': '丫', 'Z': '乙', ' ': ' '
};

export const convertToCryptic = (text: string, mode: StyleMode): string => {
  return text.toUpperCase().split('').map(char => {
    const map = mode === 'elite' ? eliteMap : basicMap;
    return map[char] || char;
  }).join('');
};

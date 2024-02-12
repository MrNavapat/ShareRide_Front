const bgClass = {
    blue: 'bg-blue-500 hover:bg-blue-600'      , 
    green: 'bg-green-500 hover:bg-green-600',
    gray: 'bg-gray-200 hover:bg-gray-300',
    red:'bg-red-400 hover:bg-red-500'
    }


const colorClass = {
    white:'text-white'
}

const widthClass = {
    full:'w-full'
}

export default function Button({ children, bg, color,width,onClick }) {
    
    const classes = `
    ${bg ? bgClass[bg]  : ''} 
    ${color ? colorClass[color] : ' '}
    ${width?widthClass[width]:' '}
    `
    return <button className={`px-3 py-1.5 rounded-md ${classes}`} onClick={onClick}>{children}</button>
}



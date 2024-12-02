const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Bet Blocker - Bloqueie os sites de apostas',
    description: 'Uma solução descentralizada e focada em bloquear e impedir o acesso a sites de apostas e bets.'
}


// default open graph data
const og = {
    title: 'Bet Blocker - Bloqueie os sites de apostas',
    description: 'Uma solução descentralizada e focada em bloquear e impedir o acesso a sites de apostas e bets.',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'Bet Blocker - Bloqueie os sites de apostas',
    description: 'Uma solução descentralizada e focada em bloquear e impedir o acesso a sites de apostas e bets.',
    email: 'contato@eduardev.com'
}


export { baseURL, style, meta, og, schema };
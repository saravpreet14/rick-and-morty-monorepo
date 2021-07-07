const reportWebVitals = (onPrefEntry, onChange = false) => {
    if (onPrefEntry && onPrefEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPrefEntry, onChange);
            getFID(onPrefEntry, onChange);
            getFCP(onPrefEntry, onChange);
            getLCP(onPrefEntry, onChange);
            getTTFB(onPrefEntry, onChange);
        })
    }
}

export default reportWebVitals;
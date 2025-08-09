import { useRef, useEffect, useState } from 'react';

export default function Welcome() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [topOffset, setTopOffset] = useState<number>(0);

    useEffect(() => {
        const calcTop = () => {
            const wrapper = wrapperRef.current;
            const lineHeight = 24;

            if (wrapper) {
                const mainHeight = document.querySelector('main')?.clientHeight || window.innerHeight;
                const wrapperHeight = wrapper.clientHeight;

                const rawTop = (mainHeight - wrapperHeight) / 2;
                const snappedTop = Math.round(rawTop / lineHeight) * lineHeight;

                setTopOffset(snappedTop);
            }
        }

        calcTop();
        window.addEventListener('resize', calcTop);
        return () => window.removeEventListener('resize', calcTop);
    }, []);

    return (
        <div 
        className="wrapper welcome"
        ref={wrapperRef}
        style={{top: `${topOffset}px`}}
        >
            <div className="head">Carlo's Portfolio v0.1.0</div>
            <div className="command">
                <span>type: :help<span>&lt;Enter&gt;</span></span>
                <span>type: i<span>&lt;Enter&gt;</span></span>
                <span>type: q<span>&lt;Enter&gt;</span></span>
                <span>type: resume<span>&lt;Enter&gt;</span></span>
            </div>
            <div className="desc">
                <p>if you're new!</p>
                <p>to view</p>
                <p>to exit</p>
                <p>download resume</p>
            </div>
        </div>
    );
}

import React from "react";

type IDeviceType = 'mobile' | 'tablet' | 'desktop';

function getDeviceType(): IDeviceType {
    if(typeof window === "undefined") {
        return "desktop";
    }
    if(window.innerWidth < 768) {
        return "mobile";
    }else if(window.innerWidth < 1024) {
        return "tablet";
    }
    return "desktop";
}
function useDeviceType(): {
    deviceType: IDeviceType;
    isDesktop: boolean;
    isMobile: boolean;
} {
    const [deviceType] = React.useState(getDeviceType());

    const isDesktop  = React.useMemo(() => {
        return deviceType === "desktop";
    }, []);

    const isMobile  = React.useMemo(() => {
        return deviceType === "mobile";
    }, []);
    
    return {
        deviceType,
        isDesktop,
        isMobile
    };
}

export default useDeviceType;

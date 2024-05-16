import bgImage from '@/public/bg.jpg';

export default function MainPageLayout({
    children,
}:{
    children: React.ReactNode;
}){
    return (
            <div className=""
            style={{
                backgroundImage: `url("/bg.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
            }}>{children}</div>
        )
}
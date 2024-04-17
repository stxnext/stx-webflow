export default async function loadScript (url: string): Promise<void> {
  await new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => { resolve(true); };
    script.onerror = () => { reject(new Error(`Can't load script ${url}`)); };
    document.head.appendChild(script);
  });
}

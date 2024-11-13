function GetSunTime({ time, suntime }: { time: string; suntime: string }) {
  return (
    <div className="w-full flex items-center gap-2">
      <img src="/assets/icons/1000d.svg" alt="" className="h-14" />
      <div className="flex flex-col">
        <p className="text-sm text-muted-foreground">{suntime}</p>
        <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
          {time}
        </p>
      </div>
    </div>
  );
}

export { GetSunTime };

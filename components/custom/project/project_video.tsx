"use client";

// import ReactPlayer from "react-player";
// import {
//   MediaController,
//   MediaControlBar,
//   MediaTimeRange,
//   MediaTimeDisplay,
//   MediaVolumeRange,
//   MediaPlaybackRateButton,
//   MediaPlayButton,
//   MediaSeekBackwardButton,
//   MediaSeekForwardButton,
//   MediaMuteButton,
//   MediaFullscreenButton,
// } from "media-chrome/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";

export default function ProjectVideo() {
  return (
    <>
      <Dialog>
        <DialogTrigger render={<Button variant={"outline"} size={"icon"} />}>
          <PlayCircle />
        </DialogTrigger>
        <DialogContent className={"sm:min-w-2xl h-60 p-7"} showCloseButton={true}>
          {/* <MediaController className="rounded-2xl w-full aspect-video">
            <ReactPlayer
              slot="media"
              src="https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"
              controls={false}
              style={{
                width: "100%",
                height: "100%",
                ["--controls" as string]: "none",
              }}
            ></ReactPlayer>
            <MediaControlBar>
              <MediaPlayButton />
              <MediaSeekBackwardButton seekOffset={10} />
              <MediaSeekForwardButton seekOffset={10} />
              <MediaTimeRange />
              <MediaTimeDisplay showDuration />
              <MediaMuteButton />
              <MediaVolumeRange />
              <MediaPlaybackRateButton />
              <MediaFullscreenButton />
            </MediaControlBar>
          </MediaController> */}
        </DialogContent>
      </Dialog>
    </>
  );
}

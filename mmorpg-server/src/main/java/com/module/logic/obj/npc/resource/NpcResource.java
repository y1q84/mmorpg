package com.module.logic.obj.npc.resource;

import com.common.resource.annotation.Id;
import com.common.resource.annotation.Resources;

@Resources
public class NpcResource {

    @Id
    private long npcId;
    private String speakContent;

    public long getNpcId() {
        return npcId;
    }

    public void setNpcId(long npcId) {
        this.npcId = npcId;
    }

    public String getSpeakContent() {
        return speakContent;
    }

    public void setSpeakContent(String speakContent) {
        this.speakContent = speakContent;
    }
}

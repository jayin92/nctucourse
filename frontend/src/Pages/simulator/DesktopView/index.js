import { Collapse, makeStyles, Tabs } from "@material-ui/core"
import { Cancel, Info, Warning } from "@material-ui/icons"
import React, { useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd"
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews"
import CategoryPanel from "../Components/CategoryPanel"
import StatisticsPanel from "../Components/StatisticsPanel"
import UnusedItems from "../Components/UnusedItems"
import { CollapseButton, CollapsePaper, CollapseSave, CollapseText, ContainerGrid, ContainerPaper, Tab, TabPanel } from "./style"

const useStyles = makeStyles(() => ({
    view: {
        flexGrow: 1,
        "& > div": {
            height: "100%",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important"
        }
    }
}))

const SimulatorDesktopView = ({ dirty, importSuccess, onDirtyClose, onImportSuccessClose, onCourseDragEnd }) => {
    const classes = useStyles()
    const [tabIndex, setTabIndex] = useState(0)
    const handleTabSwitch = (_, value) => setTabIndex(value)

    return (
        <DragDropContext onDragEnd={onCourseDragEnd}>
            <ContainerGrid container direction="row" spacing={2}>
                <ContainerGrid item sm={12} md={6} lg={4} xl={3}>
                    <ContainerPaper style={{ display: "flex", flexDirection: "column", paddingBottom: 50 }}>
                        <Collapse in={importSuccess}>
                            <CollapsePaper variant='outlined' style={{ background: '#D9EDF7', color: '#31708F' }}>
                                <Info />
                                <CollapseText>成功匯入新資料！</CollapseText>
                                <CollapseButton color="primary" onClick={onImportSuccessClose}>
                                    <Cancel />
                                </CollapseButton>
                            </CollapsePaper>
                        </Collapse>
                        <Collapse in={dirty}>
                            <CollapsePaper variant='outlined' style={{ background: '#FCF8E3', color: '#8A6D3B' }}>
                                <Warning />
                                <CollapseText>有未儲存的變更</CollapseText>
                                <CollapseSave onClick={onDirtyClose}>儲存</CollapseSave>
                            </CollapsePaper>
                        </Collapse>

                        <Tabs value={tabIndex} onChange={handleTabSwitch}
                            textColor="primary" variant="fullWidth">
                            <Tab label="資料統計" />
                            <Tab label="學分分類" />
                        </Tabs>

                        <SwipeableViews index={tabIndex} className={classes.view}>
                            <TabPanel index={0}>
                                <StatisticsPanel />
                            </TabPanel>

                            <TabPanel index={1}>
                                <CategoryPanel />
                            </TabPanel>
                        </SwipeableViews>

                        <UnusedItems />
                    </ContainerPaper>
                </ContainerGrid>
                <ContainerGrid item sm={12} md={6} lg={8} xl={9}>
                    <ContainerPaper>

                    </ContainerPaper>
                </ContainerGrid>
            </ContainerGrid>
        </DragDropContext>
    )
}

export default React.memo(SimulatorDesktopView)
import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function TimeLineComponent() {
  return (
    <div>
        <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText="2002"
                dateInnerStyle={{ background: '#03030c', color: '#fff' }}
                bodyContainerStyle={{
                    background: '#03030c',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <h1 className='h1'>Abolition of Dual Exchange rates</h1><br />
                <p className='p'>
                     Mediating on behalf of members on issues directly affecting them Customs, Police, Ports Authority and Local Government harassments. Successful advocacy for the take-off of support institutions i.e. Bank of Industry (BOI), SMIDA etc. to provide finance and strategic intervention for the revitalization of industries in Nigeria. Removal of VAT on industrial machinery. Removal of import duty on some machinery e.g. CKD for Motor Assembly Plants. Favourable and satisfactory interpretation of the Withholding Tax Law in respect of manufacturing inputs and some services.
                </p>
            </TimelineItem>

            <TimelineItem
                key="002"
                dateText="1998"
                dateInnerStyle={{ background: '#03030c', color: '#fff' }}
                bodyContainerStyle={{
                background: '#03030c',
                padding: '20px',
                borderRadius: '8px',
                }}
            >
                <h1 className='h1'>Establishment of Fast Track Clearing Procedures</h1><br />
                <p className='p'>  
                    Establishment of Fast Track Clearing Procedures at the Ports for Bonafide Manufacturers.
                    Protection of local industries from multiple taxation by persuading the Federal Government to promulgate Decree 21 of 1998 which defined the taxing powers of the three tiers of government.
                    Institution of legal action against some unfavourable laws such as the Sales Tax law
                </p>
            </TimelineItem>

            <TimelineItem
                key="003"
                dateText="1980"
                dateInnerStyle={{ background: '#03030c', color: '#fff' }}
                bodyContainerStyle={{
                    background: '#03030c',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <h1 className='h1'>A Leading Business Association In Nigeria</h1><br />
                <p className='p'>
                    MAN has successfully positioned itself as a leading business Association recognized and respected by Government. In the management of the economy, the relevance of MAN has been appreciated through invitations to serve on many committees set up by government and other organizations viz:
                </p>
            </TimelineItem>

            <TimelineItem
                key="004"
                dateText="1971"
                dateInnerStyle={{ background: '#03030c' }}
                bodyContainerStyle={{
                    background: '#03030c',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <h1 className='h1'>Making giant strides in the areas of policy advocacy</h1><br />
                <p className='p'>
                    The Association, since its establishment in 1971 has made giant strides in the areas of policy advocacy, business information and development as well as outright direct intervention.
                </p>
            </TimelineItem>
        </Timeline>
    </div>
  )
}

export default TimeLineComponent
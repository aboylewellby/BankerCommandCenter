import { useState } from 'react';
import { Calendar, Plus, CheckCircle2, Users, FileText, DollarSign, CalendarCheck, Target, BarChart3, Phone, Handshake, MessageSquare, TrendingUp, BarChart, CalendarClock, Rocket, Check } from 'lucide-react';
import wellbyLogo from '../imports/Wellby_Financial_HorizontalLogo_WhiteOnViolet.png';

interface ProductionTarget {
  goal: string;
  actual: string;
}

interface DailyData {
  appointmentsScheduled: boolean[];
  tasksDue: string;
  pastDue: string;
  assignedLeads: string;
  inBranchReferrals: string;
  newMemberships: string;
  checkingsOpened: string;
  applicationsTaken: string;
  mnasCompleted: string;
  loansFunded: string;
  whatIfCalculatorReviewed: boolean;
  timeBlocks: { [hour: string]: string };
}

export default function App() {
  const [weekOf, setWeekOf] = useState('');
  const [weeklyIntention, setWeeklyIntention] = useState('');

  const [productionTargets, setProductionTargets] = useState<{
    checkingAccounts: ProductionTarget;
    loanApplications: ProductionTarget;
    loansFunded: ProductionTarget;
    appointmentsSet: ProductionTarget;
    mnas: ProductionTarget;
  }>({
    checkingAccounts: { goal: '', actual: '' },
    loanApplications: { goal: '', actual: '' },
    loansFunded: { goal: '', actual: '' },
    appointmentsSet: { goal: '', actual: '' },
    mnas: { goal: '', actual: '' }
  });

  const [progressTrackers, setProgressTrackers] = useState({
    whatIfCalc: '',
    hubspotTasks: '',
    assignedLeads: ''
  });

  const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const timeSlots = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

  const [dailyData, setDailyData] = useState<{ [key: string]: DailyData }>(
    days.reduce((acc, day) => {
      acc[day] = {
        appointmentsScheduled: [false, false, false, false, false],
        tasksDue: '',
        pastDue: '',
        assignedLeads: '',
        inBranchReferrals: '',
        newMemberships: '',
        checkingsOpened: '',
        applicationsTaken: '',
        mnasCompleted: '',
        loansFunded: '',
        whatIfCalculatorReviewed: false,
        timeBlocks: {}
      };
      return acc;
    }, {} as { [key: string]: DailyData })
  );

  const [reflections, setReflections] = useState({
    momentum: '',
    intentional: '',
    improvement: ''
  });

  const activities = [
    { icon: CheckCircle2, label: 'HubSpot Tasks (CB)', color: 'bg-purple-700' },
    { icon: Users, label: 'HubSpot Leads (CB)', color: 'bg-purple-700' },
    { icon: Phone, label: 'Call Block (CB)', color: 'bg-purple-700' },
    { icon: Handshake, label: 'Seller for a Teller', color: 'bg-purple-700' },
    { icon: MessageSquare, label: 'MNA Conversations', color: 'bg-purple-700' },
    { icon: TrendingUp, label: 'Outbound Prospecting', color: 'bg-purple-700' },
    { icon: BarChart, label: 'Loan Pipeline Follow-Up', color: 'bg-purple-700' },
    { icon: CalendarClock, label: 'Appointment Prep', color: 'bg-purple-700' }
  ];

  const CircularProgress = ({ value, max = 100 }: { value: number; max?: number }) => {
    const percentage = max > 0 ? (value / max) * 100 : 0;
    const circumference = 2 * Math.PI * 35;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="35"
            stroke="#9333EA"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300"
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg p-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src={wellbyLogo} alt="Wellby Financial" className="h-12" />
          <div className="border-l border-white/30 pl-6">
            <h1 className="text-white text-2xl">Banker Weekly Command Center</h1>
            <p className="text-white/80 text-sm">FEEL IT. BELIEVE IT. OWN IT.</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-900" />
            <span className="text-purple-900">WEEK OF</span>
            <input
              type="text"
              value={weekOf}
              onChange={(e) => setWeekOf(e.target.value)}
              className="border-0 bg-transparent text-purple-900 outline-none w-32"
              placeholder=""
            />
          </div>
          <div className="border-2 border-white rounded-full px-6 py-2">
            <div className="text-white text-xs">Help People</div>
            <div className="text-white">PROSPER</div>
          </div>
        </div>
      </div>

      {/* Weekly Intention and Production Targets */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Weekly Intention */}
        <div className="col-span-2 bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center gap-2 mb-3 text-purple-900">
            <Target className="w-5 h-5" />
            <h3 className="uppercase tracking-wide">Weekly Intention</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">How do I want to show up this week?</p>
          <textarea
            value={weeklyIntention}
            onChange={(e) => setWeeklyIntention(e.target.value)}
            className="w-full h-32 p-2 border border-gray-300 rounded resize-none text-sm"
            placeholder="Enter your intention..."
          />
        </div>

        {/* Production Targets */}
        <div className="col-span-6 bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center gap-2 mb-4 text-purple-900">
            <BarChart3 className="w-5 h-5" />
            <h3 className="uppercase tracking-wide">Production Targets</h3>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {[
              { key: 'checkingAccounts', icon: FileText, label: 'Checking Accounts' },
              { key: 'loanApplications', icon: FileText, label: 'Loan Applications' },
              { key: 'loansFunded', icon: DollarSign, label: 'Loans Funded ($)' },
              { key: 'appointmentsSet', icon: CalendarCheck, label: 'Appointments Set' },
              { key: 'mnas', icon: Users, label: 'MNAs' }
            ].map(({ key, icon: Icon, label }) => (
              <div key={key} className="border border-purple-200 rounded-lg p-3 flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-purple-900 min-h-[2rem]">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs uppercase leading-tight">{label}</span>
                </div>
                <div className="space-y-2 flex-1">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Actual</label>
                    <input
                      type="text"
                      value={productionTargets[key as keyof typeof productionTargets].actual}
                      onChange={(e) => setProductionTargets({
                        ...productionTargets,
                        [key]: { ...productionTargets[key as keyof typeof productionTargets], actual: e.target.value }
                      })}
                      className="w-full p-1.5 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Goal</label>
                    <input
                      type="text"
                      value={productionTargets[key as keyof typeof productionTargets].goal}
                      onChange={(e) => setProductionTargets({
                        ...productionTargets,
                        [key]: { ...productionTargets[key as keyof typeof productionTargets], goal: e.target.value }
                      })}
                      className="w-full p-1.5 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="col-span-4 bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center gap-2 mb-4 text-purple-900">
            <Target className="w-5 h-5" />
            <h3 className="uppercase tracking-wide">Progress Tracker</h3>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-3 text-purple-900 min-h-[2.5rem]">
                <BarChart3 className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs uppercase text-center leading-tight">Current What-If Calc</span>
              </div>
              <div className="mb-3">
                <CircularProgress value={Number(progressTrackers.whatIfCalc) || 0} max={650} />
              </div>
              <input
                type="number"
                value={progressTrackers.whatIfCalc}
                onChange={(e) => setProgressTrackers({ ...progressTrackers, whatIfCalc: e.target.value })}
                className="w-32 h-12 p-2 border border-gray-300 rounded text-lg text-center font-medium"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-3 text-purple-900 min-h-[2.5rem]">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs uppercase text-center leading-tight">HubSpot Tasks</span>
              </div>
              <div className="mb-3">
                <CircularProgress value={Number(progressTrackers.hubspotTasks) || 0} />
              </div>
              <input
                type="number"
                value={progressTrackers.hubspotTasks}
                onChange={(e) => setProgressTrackers({ ...progressTrackers, hubspotTasks: e.target.value })}
                className="w-32 h-12 p-2 border border-gray-300 rounded text-lg text-center font-medium"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-3 text-purple-900 min-h-[2.5rem]">
                <Users className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs uppercase text-center leading-tight">Total Assigned Leads</span>
              </div>
              <div className="mb-3">
                <CircularProgress value={Number(progressTrackers.assignedLeads) || 0} />
              </div>
              <input
                type="number"
                value={progressTrackers.assignedLeads}
                onChange={(e) => setProgressTrackers({ ...progressTrackers, assignedLeads: e.target.value })}
                className="w-32 h-12 p-2 border border-gray-300 rounded text-lg text-center font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Activities Menu */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        <div className="bg-purple-900 text-white rounded-t-lg p-4">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            <h3 className="uppercase tracking-wide">Activities Menu</h3>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-8 gap-3">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-2 p-2 hover:bg-purple-50 rounded cursor-pointer border border-gray-200">
                <activity.icon className="w-4 h-4 text-purple-900 flex-shrink-0" />
                <span className="text-xs leading-tight">{activity.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-purple-50 rounded text-xs text-gray-600">
            Use these for time blocks and activity goals. <strong>CB</strong> = Call Block
          </div>
        </div>
      </div>

      {/* Daily Schedule Grid */}
      <div className="grid grid-cols-6 gap-3 mb-6">
            {days.map((day) => (
              <div key={day} className="bg-white rounded-lg border border-gray-200">
                {/* Day Header */}
                <div className="bg-purple-900 text-white p-3 rounded-t-lg">
                  <h4 className="text-center uppercase tracking-wide">{day}</h4>
                </div>

                {/* Daily Plan */}
                <div className="p-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-2 text-purple-900">
                    <span className="text-xs uppercase font-semibold">Daily Plan</span>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Tasks Due</label>
                        <input
                          type="text"
                          value={dailyData[day].tasksDue}
                          onChange={(e) => setDailyData({
                            ...dailyData,
                            [day]: { ...dailyData[day], tasksDue: e.target.value }
                          })}
                          className="w-full p-1 border border-gray-300 rounded text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Past Due</label>
                        <input
                          type="text"
                          value={dailyData[day].pastDue}
                          onChange={(e) => setDailyData({
                            ...dailyData,
                            [day]: { ...dailyData[day], pastDue: e.target.value }
                          })}
                          className="w-full p-1 border border-gray-300 rounded text-xs"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Leads to Work</label>
                        <input
                          type="text"
                          value={dailyData[day].assignedLeads}
                          onChange={(e) => setDailyData({
                            ...dailyData,
                            [day]: { ...dailyData[day], assignedLeads: e.target.value }
                          })}
                          className="w-full p-1 border border-gray-300 rounded text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">In-Branch Referrals</label>
                        <input
                          type="text"
                          value={dailyData[day].inBranchReferrals}
                          onChange={(e) => setDailyData({
                            ...dailyData,
                            [day]: { ...dailyData[day], inBranchReferrals: e.target.value }
                          })}
                          className="w-full p-1 border border-gray-300 rounded text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Time Blocking Schedule */}
                <div className="p-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-2 text-purple-900">
                    <span className="text-xs uppercase font-semibold">Time Blocking Schedule</span>
                  </div>
                  <div className="space-y-1">
                    {timeSlots.map((time) => (
                      <div key={time} className="flex items-center gap-1">
                        <span className="text-xs w-10 flex-shrink-0">{time}</span>
                        <input
                          type="text"
                          value={dailyData[day].timeBlocks[time] || ''}
                          onChange={(e) => setDailyData({
                            ...dailyData,
                            [day]: {
                              ...dailyData[day],
                              timeBlocks: { ...dailyData[day].timeBlocks, [time]: e.target.value }
                            }
                          })}
                          className="flex-1 min-w-0 p-1 border border-gray-300 rounded text-xs"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results Tracking */}
                <div className="p-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-2 text-purple-900">
                    <span className="text-xs uppercase font-semibold">Results Tracking</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Appointments Scheduled</label>
                      <div className="flex gap-2">
                        {[0, 1, 2, 3, 4].map((index) => (
                          <button
                            key={index}
                            onClick={() => {
                              const newAppointments = [...dailyData[day].appointmentsScheduled];
                              newAppointments[index] = !newAppointments[index];
                              setDailyData({
                                ...dailyData,
                                [day]: { ...dailyData[day], appointmentsScheduled: newAppointments }
                              });
                            }}
                            className={`w-6 h-6 rounded-full border-2 transition-colors flex items-center justify-center ${
                              index < 2
                                ? 'bg-purple-100 border-purple-200'
                                : 'bg-white border-gray-300'
                            }`}
                          >
                            {dailyData[day].appointmentsScheduled[index] && (
                              <Check className="w-4 h-4 text-purple-700" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-start">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1 min-h-[2rem] flex items-center">New Memberships</label>
                        <input
                          type="text"
                          value={dailyData[day].newMemberships}
                          onChange={(e) => setDailyData({
                            ...dailyData,
                            [day]: { ...dailyData[day], newMemberships: e.target.value }
                          })}
                          className="w-full p-1 border border-gray-300 rounded text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1 min-h-[2rem] flex items-center">Checking Accts</label>
                        <input
                          type="text"
                          value={dailyData[day].checkingsOpened}
                          onChange={(e) => setDailyData({
                            ...dailyData,
                            [day]: { ...dailyData[day], checkingsOpened: e.target.value }
                          })}
                          className="w-full p-1 border border-gray-300 rounded text-xs"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-start">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1 min-h-[2rem] flex items-center">MNAs Completed</label>
                        <input
                          type="text"
                          value={dailyData[day].mnasCompleted}
                          onChange={(e) => setDailyData({
                            ...dailyData,
                            [day]: { ...dailyData[day], mnasCompleted: e.target.value }
                          })}
                          className="w-full p-1 border border-gray-300 rounded text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1 min-h-[2rem] flex items-center">Applications Taken</label>
                        <input
                          type="text"
                          value={dailyData[day].applicationsTaken}
                          onChange={(e) => setDailyData({
                            ...dailyData,
                            [day]: { ...dailyData[day], applicationsTaken: e.target.value }
                          })}
                          className="w-full p-1 border border-gray-300 rounded text-xs"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Loans Funded ($)</label>
                      <input
                        type="text"
                        value={dailyData[day].loansFunded}
                        onChange={(e) => setDailyData({
                          ...dailyData,
                          [day]: { ...dailyData[day], loansFunded: e.target.value }
                        })}
                        className="w-full p-1 border border-gray-300 rounded text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* What-If Calculator Reviewed */}
                <div className="p-3">
                  <label className="flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      checked={dailyData[day].whatIfCalculatorReviewed}
                      onChange={(e) => setDailyData({
                        ...dailyData,
                        [day]: { ...dailyData[day], whatIfCalculatorReviewed: e.target.checked }
                      })}
                      className="rounded"
                    />
                    What-If Calculator Reviewed
                  </label>
                </div>
              </div>
            ))}
          </div>

      {/* Weekly Reflection */}
      <div className="bg-purple-900 text-white rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">✨</div>
          <h3 className="text-xl uppercase tracking-wide">Weekly Reflection</h3>
        </div>
        <p className="text-sm mb-4 opacity-90">Pause. Reflect. Improve. Grow.</p>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-5 h-5" />
              <label className="text-sm">What created the most momentum this week?</label>
            </div>
            <textarea
              value={reflections.momentum}
              onChange={(e) => setReflections({ ...reflections, momentum: e.target.value })}
              className="w-full h-24 p-3 rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-400 resize-none"
              placeholder="Reflect on your wins..."
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5" />
              <label className="text-sm">Where was I intentional?</label>
            </div>
            <textarea
              value={reflections.intentional}
              onChange={(e) => setReflections({ ...reflections, intentional: e.target.value })}
              className="w-full h-24 p-3 rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-400 resize-none"
              placeholder="Note your intentional actions..."
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" />
              <label className="text-sm">What needs improvement next week?</label>
            </div>
            <textarea
              value={reflections.improvement}
              onChange={(e) => setReflections({ ...reflections, improvement: e.target.value })}
              className="w-full h-24 p-3 rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-400 resize-none"
              placeholder="Plan for growth..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
